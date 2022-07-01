import React, { useState } from 'react';

interface IProps {
  options: string[];
  selectValue: string;
  onSetSelectValue: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<IProps> = React.memo(
  ({ options, selectValue, onSetSelectValue }) => {
    /** Первый элемент массива устанавливается, как плейсхолдер. Display: none его скрывает из options, но как стартовое значение он показывается */
    const renderOption = (value: string, idx: number) => {
      return idx === 0 ? (
        <option key={idx} className='hidden'>
          {value}
        </option>
      ) : (
        <option className='' key={idx}>
          {value}
        </option>
      );
    };

    return (
      <select
        value={selectValue}
        className='focus:ring-green h-12 w-full rounded-[10px] border-gray-200 text-sm text-gray-400 focus:border-transparent sm:pl-5'
        onChange={onSetSelectValue}
      >
        {options.map(renderOption)}
      </select>
    );
  }
);

Select.displayName = 'Select';
