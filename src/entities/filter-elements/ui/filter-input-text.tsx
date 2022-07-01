import React from 'react';
import { useTextInput } from '../../../shared/lib';

interface IProps {
  /** Первоначальный текст */
  placeholder: string;
  /** Callback при событии onChange, передача значения в родительский компонент */
  onChange: (value: string) => void;
  /** Приходящее из родителя значение */
  inputValue: string;
}

export const FilterInputText: React.FC<IProps> = ({
  placeholder,
  onChange,
  inputValue,
}) => {
  const textInput = useTextInput(inputValue, onChange);

  return (
    <label className='flex py-2'>
      <input
        className='form-input h-9 pl-2 border placeholder-gray-400 shadow-sm border-gray-300 rounded-md w-full outline-none focus:border-green text-sm focus:ring-transparent'
        type='text'
        placeholder={placeholder}
        {...textInput}
      />
    </label>
  );
};
