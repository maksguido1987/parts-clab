export interface ICardInfoBlock {
  /** Наименование раздела запчастей */
  name: string;
  /** Фирма производитель */
  brand: string;
  /** Количество артикулов */
  articul: string[];
  /** Применимость на опред. марки автомобилей */
  applicability: string[];
}
