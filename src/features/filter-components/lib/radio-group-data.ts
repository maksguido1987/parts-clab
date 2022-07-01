export interface IRadioGroupData {
  /** Подпись радио кнопки */
  title: string;
  /** Атрибут name */
  name: string;
  /** Значение атрибута value */
  value: string;
}

export const radioGroupData: IRadioGroupData[] = [
  {
    title: 'Новые',
    name: 'radio',
    value: 'Новые',
  },
  {
    title: 'Б/У',
    name: 'radio',
    value: 'Б/У',
  },
]
