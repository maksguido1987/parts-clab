import React from 'react';
import { FavoriteBadge, SharedIcon } from '../../../../entities';
import { useToggle } from '../../../../shared/lib';

interface IProps {
  className?: string;
}

export const FavoriteAndShared: React.FC<IProps> = React.memo(({ className }) => {
  const [markProduct, setMarkProduct] = useToggle();
  return (
    <div className={`${className ? className : ''} flex gap-x-2.5 items-center`}>
      <div
        className='flex items-center cursor-pointer group'
        onClick={setMarkProduct}
      >
        <div className='w-8 h-8 rounded-[4px] border lg:border-none border-gray-100 flex items-center justify-center group-hover:border-green transition'>
          <FavoriteBadge
            color='#5DC563'
            className={`${markProduct ? 'fill-current text-green' : ''}`}
          />
        </div>
        <span className='hidden lg:inline-block text-sm group-hover:text-green transition'>
          В избранное
        </span>
      </div>
      <div className='flex items-center cursor-pointer group'>
        <div className='w-8 h-8 rounded-[4px] border lg:border-none border-gray-100 flex items-center justify-center hover:border-gray-200 transition'>
          <SharedIcon width={14} height={14} color='white' />
        </div>
        <span className='hidden lg:inline-block text-sm group-hover:text-gray-500 transition'>
          Поделиться
        </span>
      </div>
    </div>
  );
});

FavoriteAndShared.displayName = 'FavoriteAndShared';
