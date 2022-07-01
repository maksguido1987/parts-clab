import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  PHONE_NUMBER_LENGTH,
  REG_EXP_VALIDATE_PHONE,
} from '../lib/form-wariables';
import { InputError } from './input-error';

interface IProps {
  phoneValue: string;
  setPhoneValue: (value: string) => void;
  /** Если передан флаг, то происходит автофокус при открытии страницы или модалки */
  registration?: boolean;
  placeholder: string;
  className?: string;
  /** Определяет, если ли для поля кнопка изменения номера */
  isDisabledPhone?: boolean;
  /** Проверка валидности номера телефона (длина, остальное делает библиотека) */
  onCheckValidPhone: (value: boolean) => void;
}

export const PhoneInputWrapper: React.FC<IProps> = React.memo(
  ({
    className,
    placeholder,
    registration,
    onCheckValidPhone,
    isDisabledPhone,
    setPhoneValue,
    phoneValue,
  }) => {
    /** Общая валидация номера телефона */
    const [isValidPhone, setIsValidPhone] = useState(false);
    /** Следим, покидали поле ввода или нет */
    const [isDirty, setIsDirty] = useState(false);

    const setClientPhone = (value: string) => {
      let phone = value;
      if (value && value.startsWith('8')) {
        phone = '7' + value.slice(1);
      }
      if (value && value.startsWith('9')) {
        phone = '7' + value;
      }
      setIsValidPhone(
        !(phone.length < PHONE_NUMBER_LENGTH) &&
          REG_EXP_VALIDATE_PHONE.test(phone)
      );
      setPhoneValue(phone);
    };

    useEffect(() => {
      onCheckValidPhone(isValidPhone);
    }, [isValidPhone, onCheckValidPhone]);

    const initPhoneProps = {
      name: 'phone',
      required: true,
      autoFocus: registration ? true : false,
    };

    return (
      <div className={`${className ? className : ''} w-full`}>
        <PhoneInput
          placeholder={placeholder}
          value={phoneValue}
          onChange={setClientPhone}
          onBlur={() => setIsDirty(true)}
          country={'ru' || 7}
          disabled={isDisabledPhone}
          inputProps={initPhoneProps}
          preferredCountries={['ru']}
          inputStyle={{
            height: '48px',
            padding: '5px 5px 5px 50px',
            border: '1px solid #E5E5E5',
            width: '100%',
            borderRadius: '10px',
          }}
          buttonStyle={{
            border: 'none',
            height: '80%',
            margin: 'auto',
            left: '10px',
            background: 'transparent',
          }}
        />
        {isDirty && !isValidPhone && (
          <InputError text='Не верно указан номер' />
        )}
      </div>
    );
  }
);

PhoneInputWrapper.displayName = 'PhoneInputWrapper';
