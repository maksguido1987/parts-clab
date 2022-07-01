import React from 'react';

interface IProps {
  /** Максимальное значение диапазона */
  max: number;
  /** Минимальное значение диапазона */
  min: number;
  /** Значение, передаваемое в атрибут value */
  rangeValue: number;
  /** Функция на change событие input, получает значение из таргета и передает родителю */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FilterRange: React.FC<IProps> = ({
  min,
  max,
  rangeValue,
  onChange,
}) => {
  return (
    <input
      className='filter-input-range appearance-none w-full absolute m-auto top-0 bottom-0 bg-transparent pointer-events-none focus:outline-none'
      type='range'
      min={min}
      max={max}
      value={rangeValue}
      onChange={onChange}
    />
  );
};
