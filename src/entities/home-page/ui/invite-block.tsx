import React, { ReactNode } from 'react';

interface IProps {
  title: string;
  children: ReactNode;
}

export const InviteBlock: React.FC<IProps> = ({ title, children }) => {
  return (
    <div className='border rounded-xl lg:rounded-[20px] px-[10px] sm:px-5 lg:px-10 py-10 md:py-14 bg-gray-100 lg:bg-gray-50'>
      <h2 className='text-lg sm:text-2xl font-semibold mb-5 sm:mb-10'>
        {title}
      </h2>
      <div className='grid gap-y-5 sm:gap-y-4 lg:gap-y-4'>{children}</div>
    </div>
  );
};
