export interface IServiceMenuItems {
  name: string;
  path?: string;
}

export const menuItems: IServiceMenuItems[] = [
  {
    name: 'О сервисе',
    path: '/about',
  },
  {
    name: 'Политика конфиденциальности',
    path: '/policy',
  },
  {
    name: 'Договор на оказание услуг',
    path: '/contract',
  },
];
