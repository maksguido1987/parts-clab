import React, { useState } from 'react';
import { TopSellerLabel } from '../../../labels';
import { IShopContactsProps, ShopContacts } from './shop-contacts';
import { SharedIcon } from '../../../icons';
import { Tooltip } from '../../../tooltips';

interface IProps extends IShopContactsProps {
  /** Название магазина */
  shopName: string;
}

export const ShopData: React.FC<IProps> = ({ shopName, ...props }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='p-5 lg:p-10 bg-gradient-to-r from-[#726695] to-[#4C4560] rounded-[10px] sm:min-h-[250px] mb-5 sm:mb-0'>
      <div className='flex'>
        <div className='mr-2.5 sm:mr-5 md:mr-7'>
          <div className='w-10 sm:w-14 md:w-[88px] h-10 sm:h-14 md:h-[88px] bg-[#D8F8E0] rounded-md flex items-center justify-center'>
            <span className='text-green text-sm md:text-[22px]'>МН</span>
          </div>
        </div>
        <div className='relative grow'>
          <div
            className='max-w-max'
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <TopSellerLabel
              isText
              className='text-[10px] sm:text-xs leading-3 cursor-pointer'
            />
            <Tooltip
              className='absolute lg:left-[10%] sm:left-[5%] top-7 pt-2'
              isShowTooltip={showTooltip}
            >
              Рекомендованный продавец <br />{' '}
              <span className='text-gray-400'>
                — этот магазин имеет высокие отметки качества
              </span>
            </Tooltip>
          </div>
          <div className='text-white text-base sm:text-2xl font-semibold mb-1.5'>
            {shopName}
          </div>
          <ShopContacts {...props} />
          <button className='text-xs underline text-green hover:text-green-hover'>
            Показать на карте
          </button>
        </div>
        <div className='hidden w-12 h-12 rounded-lg border border-gray-500 sm:flex items-center justify-center hover:border-gray-400 transition cursor-pointer'>
          <SharedIcon width={16} height={16} color='white' />
        </div>
      </div>
    </div>
  );
};
