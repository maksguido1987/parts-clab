export interface ICheckboxGroupData {
  /** Подпись checkbox */
  name: string;
  /** Делает checkbox не активным */
  disabled: boolean;
  /** Отмеченный checkbox */
  checked: boolean;
}

export const checkboxGroupBrand: ICheckboxGroupData[] = [
  {
    name: 'kub',
    disabled: false,
    checked: false,
  },
  {
    name: 'fenox',
    disabled: true,
    checked: false,
  },
  {
    name: 'monro',
    disabled: false,
    checked: false,
  },
  {
    name: 'patron',
    disabled: false,
    checked: false,
  },
];

export const checkboxGroupSeller: ICheckboxGroupData[] = [
  {
    name: 'Все магазины',
    disabled: false,
    checked: true,
  },
  {
    name: 'Магазин на нагорной',
    disabled: false,
    checked: false,
  },
  {
    name: 'AutoDETAILS',
    disabled: false,
    checked: false,
  },
  {
    name: 'Магазин на красносельской',
    disabled: false,
    checked: false,
  },
];
