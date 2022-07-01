import React, { useEffect, useState } from 'react';
import { Button, Input, PhoneInputWrapper } from '../../../../entities';
import { useInput } from '../../../../shared/lib';
import { IModalProps } from '../../lib';
import { ModalPortal } from '../modal-portal';
import {
  useAuthLoginMutation,
  useAuthSendCodeMutation,
} from '../../../../shared/store';

export const RegisterModal: React.FC<IModalProps> = React.memo(
  ({ isShow, setShowModal }) => {
    const [login] = useAuthLoginMutation();
    const [sendCode] = useAuthSendCodeMutation();
    const [isValidForm, setIsValidForm] = useState(false);
    const [buttonsState, setButtonsState] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const [isValidPhone, setIsValidPhone] = useState(false);
    const [isDisabledBtn, setIsDisabledBtn] = useState(false);
    const smsInput = useInput('', {
      isEmpty: true,
      minLenght: 4,
      maxLenght: 4,
    });
    const [isDisabledPhone, setIsDisabledPhone] = useState(false);
    const [isValidSms, setIsValidSms] = useState(true);

    const onCheckValidPhone = (value: boolean) => {
      setIsValidPhone(value);
    };

    const onSendCode = async () => {
      try {
        await sendCode({ phone: phoneValue })
          .unwrap()
          .then(() => {
            setButtonsState(true);
            setIsDisabledPhone(true);
          });
      } catch (error) {
        console.log(error);
      }
    };

    const onLogin = async () => {
      try {
        await login({ phone: phoneValue, code: smsInput.value })
          .unwrap()
          .then(() => {
            setShowModal();
            setPhoneValue('7');
            smsInput.setValue('');
            setButtonsState(false);
          });
      } catch (error) {
        setIsValidSms(false);
      }
    };

    const onSetIsDisabledPhone = () => {
      setIsDisabledPhone(false);
      setButtonsState(false);
      setIsValidSms(true);
      smsInput.setValue('');
    };

    const onSmsInputChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      smsInput.onChange(e);
      setIsValidSms(true);
    };

    useEffect(() => {
      if (smsInput.isValidInput && isValidPhone) {
        setIsValidForm(true);
      } else {
        setIsValidForm(false);
      }
      if (isValidPhone) {
        setIsDisabledBtn(true);
      } else {
        setIsDisabledBtn(false);
      }
    }, [smsInput.isValidInput, isValidPhone]);

    return (
      <ModalPortal
        show={isShow}
        onClose={setShowModal}
        title='Вход или регистрация'
      >
        <div>
          <p className='pb-3 pt-2 text-sm md:pb-7 md:pt-5 md:text-base'>
            Укажите свой номер телефона и мы пришлем{' '}
            <br className='hidden md:block' /> СМС–код для регистрации или входа
            на сайт.
          </p>
          <form className='relative'>
            <PhoneInputWrapper
              placeholder='Номер телефона'
              className='mb-5'
              registration
              isDisabledPhone={isDisabledPhone}
              onCheckValidPhone={onCheckValidPhone}
              phoneValue={phoneValue}
              setPhoneValue={setPhoneValue}
            />
            {buttonsState && (
              <Input
                type='text'
                placeholder='Код из СМС'
                {...smsInput}
                value={smsInput.value}
                onChange={onSmsInputChange}
                onBlur={smsInput.onBlur}
                className='mb-5'
              />
            )}
            {!buttonsState && (
              <Button
                size='form-btn'
                name='Получить код'
                className='mb-2.5 w-full md:mb-5'
                onClick={onSendCode}
                disabled={!isDisabledBtn}
              />
            )}
            {buttonsState && (
              <Button
                size='form-btn'
                name='Войти'
                className='mb-2.5 w-full md:mb-5'
                onClick={onLogin}
                disabled={!isValidForm}
              />
            )}
            {isDisabledPhone && (
              <div
                onClick={onSetIsDisabledPhone}
                className='-transform-y-1/2 absolute top-3 right-2.5 cursor-pointer py-0.5 px-1 text-xs font-semibold text-green underline transition hover:text-green-hover sm:right-5 sm:text-sm'
              >
                Изменить
              </div>
            )}
            {!isValidSms && (
              <div className='absolute top-1/2 right-5 -translate-y-1/2 text-xs text-red-500'>
                Введён не верный код
              </div>
            )}
          </form>
          <p className='mx-auto max-w-xs text-center text-xs md:text-sm'>
            Нажимая на кнопку, вы соглашаетесь на сбор и обработку персональных
            данных
          </p>
        </div>
      </ModalPortal>
    );
  }
);

RegisterModal.displayName = 'RegisterModal  ';
