export interface INavItem {
  name: string;
  path: string;
}

export const navItems: INavItem[] = [
  {
    name: 'Преимущества',
    path: '/advantages',
  },
  {
    name: 'Как выбрать товар',
    path: '/how',
  },
  {
    name: 'Помощь в подборе',
    path: '/help',
  },
  {
    name: 'Оплата и получение',
    path: '/payment',
  },
  {
    name: 'Возврат',
    path: '/return',
  },
  {
    name: 'Помощь/FAQ',
    path: '/faq',
  },
]
