import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { DA_DATA_KEY } = publicRuntimeConfig;

export async function getUserCityByIp(ip: string) {
  try {
    const res = await fetch(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=' +
        ip,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Token ' + DA_DATA_KEY,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Город не определён!');
  }
}
