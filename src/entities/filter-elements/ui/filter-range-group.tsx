import React from 'react';
import { FilterInputNumber } from './filter-input-number';
import { FilterRange } from './filter-range';

interface IProps {
  /** Максимальное значение, которое передается для отображения в input number и передаётся обратно при движении бегунков */
  maxRangeValue: number;
  /** Минимальное значение, которое передается для отображения в input number и передаётся обратно при движении бегунков */
  minRangeValue: number;
  /** Стартовое значение бегунков ( конечное положение) */
  max: number;
  /** Стартовое значение бегунков (начальное положение) */
  min: number;
  /** Выполняемая функция при событии onChange, передача МИНимального значения в родительский компонент */
  onSetMinRangeValue: (value: number) => void;
  /** Выполняемая функция при событии onChange, передача МАКСимального значения в родительский компонент */
  onSetMaxRangeValue: (value: number) => void;
}

/** Input range с 2мя бегунками. Состоит из 2х input range, каждый отвечает за минимальное либо максимальное значение.
 *  Так же в блоке 2 input number. Всё связано 2мя стейтами в родительском компоненте.
 *  Основной сброс стилей в tailwind.css */

export const FilterRangeGroup: React.FC<IProps> = ({
  minRangeValue,
  min,
  maxRangeValue,
  max,
  onSetMinRangeValue,
  onSetMaxRangeValue,
}) => {
  const handleMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    /** Ограничивает бегунок и установку значения через input */
    if (+value >= maxRangeValue || +value < min) return;
    onSetMinRangeValue(+value);
  };

  const handleMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    /** Ограничивает бегунок и установку значения через input */
    if (+value <= minRangeValue || +value > max) return;
    onSetMaxRangeValue(+value);
  };

  return (
    <>
      <div className='relative py-3 flex mb-3'>
        <div className='w-full h-1 absolute top-0 rounded-sm bottom-0 m-auto bg-gradient-to-r from-green-bg to-green'></div>
        <FilterRange
          min={min}
          max={max}
          rangeValue={minRangeValue}
          onChange={handleMinValue}
        />
        <FilterRange
          min={min}
          max={max}
          rangeValue={maxRangeValue}
          onChange={handleMaxValue}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-4'>
        <FilterInputNumber
          range
          name='от'
          inputValue={minRangeValue}
          onEventChange={handleMinValue}
        />
        <FilterInputNumber
          range
          name='до'
          inputValue={maxRangeValue}
          onEventChange={handleMaxValue}
        />
      </div>
    </>
  );
};
