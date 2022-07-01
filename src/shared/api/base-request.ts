import getConfig from 'next/config';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseQueryFn } from '@reduxjs/toolkit/dist/query/react';

const { publicRuntimeConfig } = getConfig();
export const { API_URL } = publicRuntimeConfig;

export const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.response.use(
  (data) => {
    return data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await axios.post(`${API_URL}/auth/refresh`, undefined, {
          withCredentials: true,
        });
        return api.request(originalRequest);
      } catch (e) {
        // TODO:
        console.log('НЕ АВТОРИЗОВАН');
      }
    }
    throw error;
  }
);

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data }) => {
    try {
      const result = await api.request({ url: baseUrl + url, method, data });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
