import React from 'react';

interface IProps {
  /** Подпись чекбокса */
  name: string;
  /** Выполняемая функция при событии onChange, передача значения в родительский компонент */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Boolean значение, активен ли чекбокс. Должно приходить извне */
  checked: boolean;
  /** Boolean значение. Должно приходить извне, если товара нет в наличии */
  disabled?: boolean;
}

export const FilterCheckbox: React.FC<IProps> = ({
  onChange,
  name,
  checked,
  disabled = false,
}) => {
  return (
    <label
      className={`${
        disabled ? 'text-gray-300' : ''
      } cursor-pointer flex items-center text-sm py-1.5`}
    >
      <input
        className='form-checkbox focus:border-green checked:bg-checkbox-checked rounded-sm cursor-pointer border-gray-400 mr-2.5 focus:ring-transparent'
        type='checkbox'
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      {name}
    </label>
  );
};
