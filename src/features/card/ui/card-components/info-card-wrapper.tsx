import React from 'react';

interface IProps {
  isHorizontal: boolean;
  children: React.ReactNode;
}

export const InfoCardWrapper: React.FC<IProps> = ({ isHorizontal, children }) => {
  return (
    <div  className={`${isHorizontal ? '' : ''} w-full`}>
      {children}
    </div>
  );
};
