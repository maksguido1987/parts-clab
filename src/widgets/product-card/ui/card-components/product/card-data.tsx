import React from 'react';
import Image from 'next/image';
import {
  Tooltip,
  Button,
  RatingBar,
  TopSellerLabel,
} from '../../../../../entities';
import helpIcon from '../../../../../../public/img/help.svg';
import stockIcon from '../../../../../../public/img/stock.svg';
import pickupIcon from '../../../../../../public/img/pickup.svg';
import calculateDeliveryIcon from '../../../../../../public/img/calculate-delivery.svg';
import { useToggle } from '../../../../../shared/lib';
import { ModalPortal } from '../../../../modals';

export const CardData = React.memo(() => {
  const [showTooltip, setShowTooltip] = useToggle();
  const [showPopup, setShowPopup] = useToggle();

  return (
    <div className='sm:flex sm:justify-between relative'>
      <div className='font-bold mb-3.5 sm:mb-0 sm:basis-1/2'>
        <div className='flex items-center space-x-2 sm:mb-2.5'>
          <span className='text-2xl sm:text-[34px]'>163 ₽</span>
          <span className='text-base sm:text-lg text-gray-300 line-through'>
            194 ₽
          </span>
        </div>
        <div className='flex items-center space-x-2 mb-5'>
          <span className='text-green sm:text-lg'>152 ₽</span>
          <span className='text-[10px] sm:text-xs text-gray-400 font-normal'>
            цена при оплате на сайте
          </span>
          <span
            className='relative w-3 sm:w-[18px] h-3 sm:h-[18px] cursor-pointer'
            onMouseEnter={setShowTooltip}
            onMouseLeave={setShowTooltip}
          >
            <Image
              alt='help'
              src={helpIcon}
              layout='fill'
              objectFit='contain'
            />
          </span>
        </div>
        <Button
          size='small-btn'
          className='w-full sm:w-[216px] text-sm'
          name='Добавить в корзину'
          onClick={() => console.log('Добавить в корзину')}
        />
        <Tooltip
          className='top-[65px] sm:top-1/2 left-[158px] sm:left-[195px]'
          isShowTooltip={showTooltip}
        >
          Цена ниже при оплате онлайн на нашем сайте
        </Tooltip>
      </div>
      {/** =======В наличии, самовывоз, рассчитать доставку======= */}
      <div className='text-xs sm:text-sm sm:basis-1/2'>
        {/** =======В наличии======= */}
        <div className='mb-3.5 flex items-start'>
          <Image alt='stock' src={stockIcon} width={16} height={16} />
          <div className='ml-2'>
            <span className=''>В наличии</span>
            <div className='flex items-center mb-1'>
              <span className='text-green text-xs sm:text-sm mr-2.5 font-semibold'>
                магазин на Нагорной
              </span>
              <RatingBar className='w-11 h-3.5' done={87} />
            </div>
            <TopSellerLabel isText />
          </div>
        </div>
        {/** =======Рассчитать доставку======= */}
        <div className='mb-3.5 flex items-start'>
          <Image
            alt='calculate-delivery'
            src={calculateDeliveryIcon}
            width={16}
            height={16}
          />
          <div className='ml-2'>
            <span
              className='border-b border-dotted border-green mr-1 cursor-pointer'
              onClick={setShowPopup}
            >
              Рассчитать доставку
            </span>
            <span className='text-gray-400 border-none'>
              завтра <br /> и позже от 290 ₽
            </span>
          </div>
        </div>
        {/** =======Самовывоз======= */}
        <div className='flex items-start'>
          <Image alt='pickup' src={pickupIcon} width={16} height={16} />
          <div className='ml-2'>
            <span className='border-b border-dotted border-green mr-1'>
              Cамовывоз
            </span>
            <span className='text-gray-400'>бесплатно</span>
          </div>
        </div>
      </div>
      <ModalPortal
        title='Рассчитать доставку'
        onClose={setShowPopup}
        show={showPopup}
      >
        Рассчитать доставку
      </ModalPortal>
    </div>
  );
});

CardData.displayName = 'CardData';
