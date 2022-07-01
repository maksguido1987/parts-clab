import React, { useState } from 'react';
import Image from 'next/image';
import noPhoto from '../../../../public/img/no-photo.png';

interface IProps {
  src: string;
  partName: string;
  brand: string;
  articul: string;
  price: string;
  isCart?: boolean;
}

export const OrderCard: React.FC<IProps> = ({
  src,
  partName,
  brand,
  articul,
  price,
  isCart,
}) => {
  const [partCount, setPartCount] = useState<number>(1);

  return (
    <div
      className={`${
        isCart ? '' : 'md:py-2.5 md:px-0 lg:p-5'
      } relative mb-4 flex w-full border-y border-gray-100 p-2.5 last:mb-0 sm:p-5 `}
    >
      <div
        className={`${
          isCart ? '' : 'md:h-[82px] md:w-[100px] lg:h-[82px] lg:w-[100px]'
        } relative mr-2 h-[82px] w-[100px] shrink-0 sm:mr-5 sm:h-[137px] sm:w-[176px]`}
      >
        <Image
          src={src === '' ? noPhoto : src}
          alt='part'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='grow justify-between sm:flex'>
        <div className='flex flex-col items-stretch'>
          <div
            className={`${
              isCart ? '' : 'md:text-sm lg:text-lg'
            } mb-2 text-sm sm:text-lg`}
          >
            {partName}
          </div>
          <div className='mb-4 text-[10px] text-gray-400 sm:grow sm:text-sm'>
            {brand}
          </div>
          <div
            className={`${isCart ? 'mb-4 sm:mb-0' : 'mb-1'} text-xs sm:text-sm`}
          >
            Артикул: {articul}
          </div>
        </div>
        <div
          className={`${
            isCart ? 'mb-8 sm:mb-0' : ''
          } whitespace-nowrap text-lg sm:text-xl`}
        >
          {price} ₽
        </div>
      </div>
      {isCart && (
        <div className='absolute bottom-2.5 left-1/2 flex -translate-x-1/2 text-[10px] sm:bottom-5 sm:left-3/4 lg:left-1/2'>
          <div
            className='flex h-[14px] w-[14px] cursor-pointer items-center justify-center bg-gray-200 hover:bg-green hover:text-white'
            onClick={() => setPartCount((s) => (s === 1 ? s : s - 1))}
          >
            -
          </div>
          <div className='mx-2.5'>{partCount}</div>
          <div
            className='flex h-[14px] w-[14px] cursor-pointer items-center justify-center bg-gray-200 hover:bg-green hover:text-white'
            onClick={() => setPartCount((s) => s + 1)}
          >
            +
          </div>
        </div>
      )}
      <div className='absolute bottom-2.5 right-0 cursor-pointer text-sm text-gray-400 underline sm:bottom-5'>
        Удалить
      </div>
    </div>
  );
};
