import React from 'react';

interface IProps {
  /** Выполняемая функция при событии onChange, передача значения в родительский компонент */
  onChange?: (value: number) => void;
  /** Выполняемая функция при событии onChange, если передан флаг range */
  onEventChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Приходящее из родителя значение */
  inputValue: number;
  /** Boolean флаг, если инпут передан для отображения значений range input */
  range?: boolean;
  /** Подпись значений для input, которые используются совместно с range */
  name?: string;
}

export const FilterInputNumber: React.FC<IProps> = ({
  onChange,
  onEventChange,
  range,
  name,
  inputValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onChange!(+value);
  };

  return (
    <label className={`${range ? 'relative' : ''} flex py-2`}>
      {range && (
        <span className='absolute left-2.5 top-1/2 transform -translate-y-3'>
          {name}
        </span>
      )}
      <input
        className={`h-9 pl-2 ${
          range ? 'pl-8' : ''
        } form-input  border shadow-sm border-gray-300 rounded-md w-full outline-none focus:border-green text-sm focus:ring-transparent`}
        type='number'
        value={inputValue}
        onChange={range ? onEventChange : handleChange}
      />
    </label>
  );
};
