/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    DA_DATA_KEY: process.env.DA_DATA_KEY,
    YANDEX_MAP_KEY: process.env.YANDEX_MAP_KEY,
  },
  images: {
    domains: ['api.partsclub.ru'],
  },
};
