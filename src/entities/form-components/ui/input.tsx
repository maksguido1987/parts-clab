import React from 'react';
import { IFormFieldProps } from '../lib/form.interfaces';
import { InputError } from './input-error';

export const Input: React.FC<IFormFieldProps> = React.memo(
  ({
    type,
    className,
    value,
    onChange,
    onBlur,
    isEmptyError,
    isDirty,
    maxLenghtError,
    minLenghtError,
    emailError,
    placeholder,
    disabled = false,
  }) => {
    return (
      <label className={`${className ? className : ''} relative block w-full`}>
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          disabled={disabled}
          className='focus:border-green h-12 w-full rounded-[10px] border-gray-200 px-2.5 text-sm placeholder-gray-400 focus:outline-none focus:ring-transparent disabled:bg-gray-50 sm:px-5'
        />
        {isDirty && isEmptyError && (
          <InputError text='Поле не может быть пустым' />
        )}
        {isDirty && maxLenghtError && (
          <InputError text='Превышено допустимое количество символов' />
        )}
        {isDirty && minLenghtError && !isEmptyError && (
          <InputError text='Недостаточно символов' />
        )}
        {isDirty && emailError && <InputError text='Не корректный email' />}
      </label>
    );
  }
);

Input.displayName = 'Input';
