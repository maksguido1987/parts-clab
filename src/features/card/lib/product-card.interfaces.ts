import { IImageCarousel } from '../../../entities';

export interface ICategoryData extends ICardInfoBlock {
  /** Наименование раздела запчастей */
  images: IImageCarousel[];
  /** Минимальная цена */
  minPrice: number;
  /** Максимальная цена */
  maxPrice: number;
  /** Новая либо б/у деталь */
  isNew: boolean;
  /** Количество запчастей */
  value: number;
  /** Количество продавцов */
  sellersCount: number;
  /** Количество запчастей */
  partsCount: number;
  /** Цена товара */
  price: number;
  /** Название магазина */
  seller: string;
}

export interface ICardInfoBlock {
  /** Наименование раздела запчастей */
  name: string;
  /** Фирма производитель */
  brand: string;
  /** Количество артикулов */
  articul: string[];
  /** Применимость на опред. марки автомобилей */
  applicability: string[];
  /** Название детали аналога */
  analogDetail: string;
  /** Новая деталь */
  isNewDetail: boolean;
}
