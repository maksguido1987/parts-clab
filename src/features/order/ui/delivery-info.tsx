import React from 'react';
import { Input, Textarea } from '../../../entities';
import { DeliveryDateItem } from './delivery-date-item';

export const DeliveryInfo = () => {
  return (
    <div className='space-y-2.5'>
      <Input
        type='text'
        placeholder='Адрес доставки'
        value={''}
        onChange={() => {}}
        onBlur={() => { }}
        setValue={() => {}}
      />
      <DeliveryDateItem
        label='Дата доставки:'
        date={'Понедельник, 1 октября'}
      />
      <DeliveryDateItem label='Время доставки:' date={'9:00 - 18:00'} />
      <Textarea
        placeholder='Комментарий'
        value={''}
        onChange={() => {}}
        onBlur={() => { }}
        setValue={() => {}}  
      />
    </div>
  );
};
