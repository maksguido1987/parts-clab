import React, { useEffect, useState } from 'react';
import { Button, Input, PhoneInputWrapper } from '../../../entities';
import { useInput } from '../../../shared/lib';

export const UserData = () => {
  const [isValidUserDataForm, setIsValidUserDataForm] = useState(false);
  /** Номер телефона получателя */
  const [clientPhone, setClientPhone] = useState('');
  const [isValidClientPhone, setIsValidClientPhone] = useState(false);
  /** Номер телефона лица, кто будет получать товар вместо заказчика */
  const [receiverPhone, setReceiverPhone] = useState('');
  const [isValidReceiverPhone, setIsValidReceiverPhone] = useState(false);
  const clientInput = useInput('', {
    minLenght: 1,
    maxLenght: 20,
  });
  const receiverInput = useInput('', {
    minLenght: 1,
    maxLenght: 20,
  });
  const smsInput = useInput('', {
    isEmpty: true,
    minLenght: 4,
    maxLenght: 4,
  });
  /** Состояние отображения дополнительных полей */
  const [isAnotherPerson, setIsAnotherPerson] = useState(false);
  const [isSmsInput, setIsSmsInput] = useState(false);
  const [isValidSmsCode, setIsValidSmsCode] = useState(false);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);

  useEffect(() => {
    if (clientInput.isValidInput && isValidClientPhone && !isAnotherPerson) {
      setIsValidUserDataForm(true);
      setIsDisabledBtn(true);
    } else if (
      clientInput.isValidInput &&
      isValidClientPhone &&
      isAnotherPerson &&
      receiverInput.isValidInput &&
      isValidReceiverPhone
    ) {
      setIsValidUserDataForm(true);
      setIsDisabledBtn(true);
    } else {
      setIsValidUserDataForm(false);
      setIsDisabledBtn(false);
    }
  }, [
    clientInput.isValidInput,
    isAnotherPerson,
    isValidClientPhone,
    isValidReceiverPhone,
    receiverInput.isValidInput,
  ]);

  useEffect(() => {
    if (smsInput.isValidInput) {
      setIsValidSmsCode(true);
    }
  }, [smsInput.isValidInput]);

  const hanleButton = () => {
    setIsSmsInput(true);
    setIsDisabledBtn(false);
  };

  const handleButton2 = () => {
    setIsValidSmsCode(false);
  };

  return (
    <form onSubmit={() => {}} className=''>
      <Input
        type='text'
        placeholder='Введите ФИО'
        {...clientInput}
        onChange={clientInput.onChange}
        onBlur={clientInput.onBlur}
        value={clientInput.value}
      />
      <div className='mt-3.5 mb-2.5 flex flex-col sm:mb-3.5 sm:flex-row'>
        <PhoneInputWrapper
          placeholder='Номер телефона'
          className='mb-3.5 basis-3/4 sm:mb-0 sm:mr-5'
          onCheckValidPhone={setIsValidClientPhone}
          phoneValue={clientPhone}
          setPhoneValue={setClientPhone}
        />
        <Button
          size='form-btn'
          color='purple'
          name='Получить код'
          onClick={hanleButton}
          className='basis-1/4'
          disabled={!isDisabledBtn}
        />
      </div>
      {isAnotherPerson && (
        <div className='mb-2.5 sm:mb-5'>
          <Input
            type='text'
            placeholder='Введите ФИО получателя'
            className='mb-3.5 basis-3/4 sm:mb-0 sm:mr-5'
            {...receiverInput}
            onChange={receiverInput.onChange}
            onBlur={receiverInput.onBlur}
            value={receiverInput.value}
          />
          <PhoneInputWrapper
            placeholder='Номер телефона'
            className='mt-3.5'
            onCheckValidPhone={setIsValidReceiverPhone}
            phoneValue={receiverPhone}
            setPhoneValue={setReceiverPhone}
          />
        </div>
      )}
      {isSmsInput && (
        <div className='mt-3.5 mb-2.5 flex flex-col sm:mb-3.5 sm:flex-row'>
          <Input
            type='number'
            placeholder='Код из СМС'
            {...smsInput}
            value={smsInput.value}
            onChange={smsInput.onChange}
            onBlur={smsInput.onBlur}
            className='mb-3.5 basis-3/4 sm:mb-0 sm:mr-5'
          />
          <Button
            size='form-btn'
            color='purple'
            name='Подтвердить'
            onClick={handleButton2}
            className='basis-1/4'
            disabled={!isValidSmsCode}
          />
        </div>
      )}
      {!isSmsInput && (
        <div
          className='text-green hover:text-green-hover inline-block cursor-pointer p-1 text-sm underline hover:no-underline'
          onClick={() => setIsAnotherPerson((state) => !state)}
        >
          {isAnotherPerson
            ? 'Удалить получателя'
            : 'Заказ будет получать другой человек'}
        </div>
      )}
    </form>
  );
};
