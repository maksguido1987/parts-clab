import React, { useState } from 'react';
import Image from 'next/image';
import { AccardeonArrow } from '../../icons';
import { IHomePageStaticData } from '../lib/interfaces';

interface IProps extends Omit<IHomePageStaticData, 'src'> {
  icon: string;
}

export const InviteItem: React.FC<IProps> = React.memo(
  ({ title, text, icon, alt }) => {
    const [open, setOpen] = useState(false);

    const onOpenSubMenu = () => {
      setOpen(!open);
    };

    return (
      <div className='bg-white px-[10px] sm:px-5 md:px-8 py-3 rounded-[10px]'>
        <div className='flex sm:items-center'>
          <div className='relative shrink-0 w-[22px] h-[22px] sm:w-7 sm:h-7'>
            <Image src={icon} alt={alt} layout='fill' objectFit='contain' />
          </div>
          <div className='flex-auto px-[10px] sm:px-5'>
            <h4
              className='text-sm sm:text-base font-semibold flex-initial cursor-pointer'
              onClick={onOpenSubMenu}
            >
              {title}
            </h4>
          </div>
          <div
            className={`${
              open ? '' : '-rotate-90'
            } transition cursor-pointer w-5 h-5 ml-auto`}
            onClick={onOpenSubMenu}
          >
            <AccardeonArrow color='#5DC563' />
          </div>
        </div>
        {open && (
          <p className='text-xs sm:text-sm text-opacity-90 text-blue pt-3 px-8 sm:px-12'>
            {text}
          </p>
        )}
      </div>
    );
  }
);

InviteItem.displayName = 'InviteItem';
