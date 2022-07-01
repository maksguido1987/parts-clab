import React from 'react';
import { IFormFieldProps } from '../lib/form.interfaces';
import { InputError } from './input-error';

export const Textarea: React.FC<IFormFieldProps> = ({
  className,
  value,
  onChange,
  onBlur,
  isEmptyError,
  isDirty,
  maxLenghtError,
  placeholder,
  disabled = false,
}) => {
  return (
    <label className={`${className ? className : ''} relative block w-full`}>
      <textarea
        placeholder={placeholder}
        className={` focus:border-green min-h-[48px] w-full rounded-[10px] border border-gray-200 px-2.5 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-transparent sm:px-5`}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {isDirty && isEmptyError && (
        <InputError text='Поле не может быть пустым' />
      )}
      {isDirty && maxLenghtError && (
        <InputError text='Поле не должно превышать 500 символов' />
      )}
    </label>
  );
};
