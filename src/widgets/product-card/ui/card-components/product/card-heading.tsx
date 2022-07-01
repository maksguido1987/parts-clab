import React from 'react';
import { LabelDetailStatus } from '../../../../../entities';
import { FavoriteAndShared } from '../favorite-and-shared';

interface IProps {
  partName: string;
}

export const CardHeading: React.FC<IProps> = React.memo(({ partName }) => {
  return (
    <>
      <div className='flex justify-between'>
        <div className='text-lg sm:text-xl font-semibold'>{partName}</div>
        <FavoriteAndShared className='absolute sm:static top-10 right-5' />
      </div>
      <div className=''>
        <LabelDetailStatus
          analogDetail='2205-C-415 (BMW)'
          className='mb-1 sm:mb-0 sm:px-3 sm:py-1.5'
        />
        <div className='sm:inline-block sm:ml-2'>
          <div className='px-2 h-5 sm:h-7 inline-flex items-center leading-3 border border-gray-100 rounded-full text-xs'>
            Артикул: e362hd313
          </div>
          <div className='px-2 h-5 sm:h-7 inline-flex items-center leading-3 bg-green-light rounded-full text-xs text-green ml-2'>
            10+ шт
          </div>
        </div>
      </div>
      <hr className='border-gray-100 mt-4 mb-7' />
    </>
  );
});

CardHeading.displayName = 'CardHeading';
