export interface ICatalogWidgetItem {
  /** Категория запчастей */
  name: string;
  /** Изображение категории */
  image: string;
  /** Alt */
  alt: string;
  /** Ссылка на страницу категории */
  link: string;
}

/** Массив данных для вывода категорий запчастей */
export const catalogWidgetItems: ICatalogWidgetItem[] = [
  {
    name: 'Двигатель',
    image: '/img/catalog-images/engine.png',
    alt: 'engine',
    link: '/',
  },
  {
    name: 'Тормозная система',
    image: '/img/catalog-images/brake-system.png',
    alt: 'brake-system',
    link: '/',
  },
  {
    name: 'Подвеска',
    image: '/img/catalog-images/shock-absorber.png',
    alt: 'shock-absorber',
    link: '/',
  },
  {
    name: 'Кузовные запчасти',
    image: '/img/catalog-images/body-parts.png',
    alt: 'body-parts',
    link: '/',
  },
  {
    name: 'Шины и диски',
    image: '/img/catalog-images/tires-and-wheels.png',
    alt: 'tires-and-wheels',
    link: '/',
  },
  {
    name: 'Всё для ТО',
    image: '/img/catalog-images/to.png',
    alt: 'to',
    link: '/',
  },
  {
    name: 'Аккумуляторы',
    image: '/img/catalog-images/electric-battery-car.png',
    alt: 'electric-battery-car',
    link: '/',
  },
  {
    name: 'Масла и автохимия',
    image: '/img/catalog-images/motor-oil.png',
    alt: 'motor-oil',
    link: '/',
  },
  {
    name: 'Инструменты',
    image: '/img/catalog-images/instruments.png',
    alt: 'instruments',
    link: '/',
  },
  {
    name: 'Электрика и свет',
    image: '/img/catalog-images/electrics.png',
    alt: 'electrics',
    link: '/',
  },
  {
    name: 'Аксессуары',
    image: '/img/catalog-images/accessories.png',
    alt: 'accessories',
    link: '/',
  },
  {
    name: 'Все запчасти',
    image: '/img/catalog-images/all.svg',
    alt: 'all parts',
    link: '',
  },
];
