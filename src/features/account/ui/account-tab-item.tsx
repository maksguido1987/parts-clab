import React from 'react';
import Image from 'next/image';
import { AccardeonArrow } from '../../../entities';

interface IProps {
  name: string;
  src: string;
  active: string;
  className?: string;
  onClick: (e: React.MouseEvent) => void;
}

export const AccountTabItem: React.FC<IProps> = ({
  name,
  src,
  active,
  className,
  onClick
}) => {
  return (
    <div
      className={`${
        className ? className : ''
        } flex items-center cursor-pointer`}
      onClick={onClick}
    >
      <div className='shrink rounded-full bg-gray-200 w-6 h-6 mr-2.5 flex items-center justify-center'>
        <Image src={src} alt='personal-account' width={12} height={12} />
      </div>
      <div className={`${active === name ? 'text-green' : ''} transition grow text-sm`}>
        {name}
      </div>
      <div className='shrink'>
        <AccardeonArrow
          color={active === name ? '#5DC563' : ''}
          width={16}
          height={16}
          className='-rotate-90'
        />
      </div>
    </div>
  );
};
