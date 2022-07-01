import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const PaymentListItem: React.FC<IProps> = ({ children, className }) => {
  return (
    <li className={`${className ? className : ''} text-sm mb-2.5 md:mb-7 flex`}>
      <div className='w-[22px] h-[22px] flex items-center justify-center bg-gradient-to-r from-[#5dc56333] to-[#34eac733] mr-2.5 rounded-full shrink-0'>
        <span className='w-[14px] h-[14px] flex items-center justify-center bg-gradient-to-r from-[#5dc5637f] to-[#34eac77f] rounded-full'>
          <span className='w-2 h-2 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full'></span>
        </span>
      </div>
      {children}
    </li>
  );
};
