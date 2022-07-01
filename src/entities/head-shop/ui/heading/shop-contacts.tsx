import React from 'react';

export interface IShopContactsProps {
  /** Первый день диапазона работы магазина */
  firstDay: string;
  /** Второй день диапазона работы магазина */
  lastDay: string;
  /** Время начала работы магазина */
  firstTime: string;
  /** Время конца работы магазина */
  lastTime: string;
  /** Адрес */
  address: string;
  /** Номер телефона */
  tel: string;
}

export const ShopContacts: React.FC<IShopContactsProps> = ({
  firstDay,
  lastDay,
  firstTime,
  lastTime,
  address,
  tel,
}) => (
  <div className='text-white text-xs sm:text-sm'>
    <div>
      <span className='uppercase'>
        {firstDay}-{lastDay}
      </span>
      <span>
        {' '}
        c {firstTime} - {lastTime}
      </span>
    </div>
    <div className='sm:flex space-x-2'>
      <div>{address}</div>
      <div>Тел: {tel}</div>
    </div>
  </div>
);
