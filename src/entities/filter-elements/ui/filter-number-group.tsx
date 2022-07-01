import React from 'react';
import { FilterInputNumber } from './filter-input-number';

interface IProps {
  /** Значение первого поля, минимально */
  minNumValue: number;
  /** Значение вторго поля, максимальное */
  maxNumValue: number;
  /** Стартовое значение бегунков (начальное положение) */
  min: number;
  /** Стартовое значение бегунков ( конечное положение) */
  max: number;
  /** Функция, принимает 2 значения и передаёт родителю */
  onMinChange: (value: number) => void;
  /** Функция, принимает 2 значения и передаёт родителю */
  onMaxChange: (value: number) => void;
}

export const FilterNumberGroup: React.FC<IProps> = ({
  minNumValue,
  maxNumValue,
  min,
  max,
  onMinChange,
  onMaxChange,
}) => {
  return (
    <div className='grid gap-x-4 grid-cols-2'>
      <FilterInputNumber
        inputValue={minNumValue}
        onChange={(value: number) => {
          return value < min ? undefined : onMinChange(value);
        }}
      />
      <FilterInputNumber
        inputValue={maxNumValue}
        onChange={(value: number) => {
          return value > max ? undefined : onMaxChange(value);
        }}
      />
    </div>
  );
};
