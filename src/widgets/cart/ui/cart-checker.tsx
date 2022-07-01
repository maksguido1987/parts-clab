import React from 'react';
import { useToggle } from '../../../shared/lib';

export const CartChecker = () => {
  const [check, setCheck] = useToggle();
  return (
    <div className='sm:flex max-w-[720px] border border-gray-200 rounded-[10px] px-2.5 md:px-5 py-4 md:py-5 mb-14 md:mb-7'>
      <label
        className={`${
          check ? 'bg-gray-300' : 'bg-green'
        } flex items-center shrink-0 w-20 h-11 relative rounded-full p-0.5 transition-all cursor-pointer mb-4 sm:mb-0 sm:mr-5`}
      >
        <input
          type='checkbox'
          name=''
          checked={check}
          className='c-hidden'
          onChange={setCheck}
        />
        <span
          className={`${
            check ? '' : 'translate-x-9'
          } absolute w-10 h-10 bg-white rounded-full text-xs flex items-center justify-center transition-all`}
        >
          {check ? 'Да' : 'Нет'}
        </span>
      </label>
      <p className='text-sm md:text-base'>
        Показывать аналогичные товары у различных поставщиков. Оформляя заказ у
        одного поставщика вы можете сэкономить на доставке
      </p>
    </div>
  );
};
