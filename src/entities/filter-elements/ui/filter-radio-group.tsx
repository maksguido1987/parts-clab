import React from 'react';
import { IRadioGroupData } from '../../../features';

interface IProps {
  /** Массив данных для группы радио кнопок */
  radioGroupData: IRadioGroupData[];
  /** Значения стейта, определяет, какая радио кнопка активна */
  radioValue: string;
  /** Функция передачи значения в стейт, значение берется из поля value */
  onChange: (value: string) => void;
}

export const FilterRadioGroup: React.FC<IProps> = ({
  radioGroupData,
  radioValue,
  onChange,
}) => {
  const onSetRadioValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange(value);
  };

  const renderItem = (item: IRadioGroupData, idx: number) => {
    const { title, name, value } = item;

    return (
      <label
        key={idx}
        className='cursor-pointer flex items-center text-sm py-1.5'
      >
        <input
          type='radio'
          className='form-radio rounded-full border-gray-400 checked:bg-radio-checked mr-2.5 focus:ring-transparent'
          name={name}
          value={value}
          onChange={onSetRadioValue}
          checked={radioValue === value ? true : false}
        />
        {title}
      </label>
    );
  };

  return <div className='flex flex-col'>{radioGroupData.map(renderItem)}</div>;
};
