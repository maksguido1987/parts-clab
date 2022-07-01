import React from 'react';
import { LabelDetailStatus, ProductInfoItem } from '../../../../../entities';
import { ICardInfoBlock } from '../../../../../features';

interface IProps extends ICardInfoBlock {
  open: boolean;
}

export const AnalogCardInfo: React.FC<IProps> = React.memo(
  ({ name, brand, articul, applicability, open }) => {

    // const { name, brand, articul, applicability} = data;

  return (
    <div className='grow mb-2.5 md:mb-0 md:mr-2.5'>
      {/** ======Название детали====== */}
      <div className={`${open ? 'lg:text-2xl' : ''} text-sm font-semibold  mb-1 flex items-center justify-between`}>
        {name}
      </div>
      {/** ======Лейбл. Если новая деталь - зеленый, аналог - жёлтый====== */}
      <LabelDetailStatus analogDetail='2205-C-415 (BMW)' className={`${open ? 'lg:py-1.5 mr-2' : ''} mb-2`} />
      {/** ======При открытой карточке выводим артикул====== */}
      {open &&
        <div className='hidden px-2 h-7 lg:inline-flex items-center leading-3 border border-gray-100 rounded-full text-xs'>
          Артикул: e362hd313
        </div>}
      <ProductInfoItem name='Бренд'>{brand}</ProductInfoItem>
      <ProductInfoItem name='Артикул' className='cursor-pointer relative'>
        <span>{articul}</span>
      </ProductInfoItem>
      <ProductInfoItem name='Состояние'>
        <span className='text-green text-[10px] sm:text-xs rounded-full bg-green-light px-2'>
          Новый
        </span>
      </ProductInfoItem>
      <ProductInfoItem name='Применимость' isBorder className='uppercase space-x-2'>
        {applicability.map((item, idx) => {
          return (
            <span key={idx} className='uppercase'>
              {item}
            </span>
          );
        })}
      </ProductInfoItem>
    </div>
  );
});

AnalogCardInfo.displayName = 'AnalogCardInfo';
