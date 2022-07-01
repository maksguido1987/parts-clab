import React from 'react';
import Image from 'next/image';
import expandArrowicon from '../../../../public/img/expand-arrow.svg';

interface IProps {
  open: boolean;
}

export const AnalogCardOpenedLabel: React.FC<IProps> = ({ open }) => {
  return (
    <div
      className={`${
        open ? 'top-9 -left-7' : 'top-10 -left-9'
      } absolute sm:flex -rotate-90 cursor-pointer hidden`}
    >
      <p className='text-xs text-blue ml-2.5 order-last hover:text-opacity-70 transition'>
        {open ? 'Свернуть' : 'Развернуть'}
      </p>
      <Image
        alt='expand-arrow'
        src={expandArrowicon}
        width={10}
        height={10}
        className={`${open ? 'rotate-180' : ''} rotate-90 transition`}
      />
    </div>
  );
};
