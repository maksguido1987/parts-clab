import React, { ReactNode, useState } from 'react';
import { Button, Input, PhoneInputWrapper, Textarea } from '../..';
import { useInput } from '../../../shared/lib';
import { requestSelectData } from '../lib/request-select-data';
import { Select } from './select';

interface IProps {
  /** Дочерние элементы */
  children: ReactNode;
  /** Флаг. Если true - форма содержит select (для стрницы возврата), false - нет (для страницы Faq) */
  isReturn?: boolean;
}

export const RequestForm: React.FC<IProps> = ({ children, isReturn }) => {
  const [isValidForm, setIsValidForm] = useState(true);
  const [selectValue, setSelectValue] = useState('Причина возврата');

  const input = useInput('', {
    isEmpty: true,
    maxLenght: 10,
  });

  const textarea = useInput('', {
    isEmpty: true,
    maxLenght: 500,
  });

  const legend = React.Children.map(children, (child, idx) => {
    return idx === 0 ? child : null;
  });

  const customBtn = React.Children.map(children, (child, idx) => {
    return idx === 1 ? child : null;
  });

  const onSetSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectValue(value);
  };

  return (
    <form className='rounded-[10px] bg-gray-100 py-5 px-2.5 sm:p-10 md:rounded-[20px]'>
      <fieldset>
        <legend className='mb-3.5 text-center text-lg font-semibold sm:text-2xl'>
          {legend}
        </legend>
        <p className='mx-auto mb-6 text-center text-sm sm:mb-10 sm:max-w-lg sm:text-base'>
          Заполните форму и наши специалисты свяжутся с вами в ближайшее время.
        </p>
        <div className='mb-5 justify-between gap-x-5 sm:flex'>
          <Input
            type='text'
            placeholder='Имя'
            value={input.value}
            className='mb-5 sm:mb-0'
            onChange={input.onChange}
            onBlur={input.onBlur}
            setValue={() => {}}
          />
          <PhoneInputWrapper
            placeholder='Номер телефона'
            onCheckValidPhone={() => {}}
            phoneValue={''}
            setPhoneValue={() => {}}
          />
        </div>
        {isReturn ? (
          <div className='mb-5'>
            <Select
              options={requestSelectData}
              selectValue={selectValue}
              onSetSelectValue={onSetSelectValue}
            />
          </div>
        ) : null}
        <Textarea
          placeholder='Комментарий'
          value={textarea.value}
          className='mb-4'
          onChange={textarea.onChange}
          onBlur={textarea.onBlur}
          setValue={() => {}}
        />
        <div className='justify-between gap-x-5 sm:flex'>
          {customBtn}
          <Button
            name='Отправить'
            onClick={() => {
              console.log('отправить форму');
            }}
            className='w-full sm:basis-1/2'
            size='form-btn'
            disabled={!isValidForm}
          />
        </div>
      </fieldset>
    </form>
  );
};
