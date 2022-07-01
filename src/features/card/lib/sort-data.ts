export interface ISortData {
  category: string;
  sortPoint: string;
  active: boolean;
}

export const sortData: ISortData[] = [
  {
    category: 'По популярности',
    sortPoint: '',
    active: true,
  },
  {
    category: 'По рейтингу',
    sortPoint: '',
    active: false,
  },
  {
    category: 'Сначала дешёвые',
    sortPoint: '',
    active: false,
  },
  {
    category: 'Сначала дорогие',
    sortPoint: '',
    active: false,
  },
]
