import React from 'react';

interface IProps {
  isHorizontal?: boolean;
  children: React.ReactNode;
}

export const CardWrapper: React.FC<IProps> = React.memo(
  ({ isHorizontal = true, children }) => {
    return (
      <div
        className={`relative border border-gray-100 p-2.5 ${
          isHorizontal ? 'sm:border-b sm:border-0 mb-2.5 sm:mb-0' : 'w-full'
        }`}
      >
        <div
          className={`flex flex-col ${
            isHorizontal ? 'sm:flex-row grow' : 'h-full'
          }`}
        >
          {children}
        </div>
      </div>
    );
  }
);

CardWrapper.displayName = 'CardWrapper';
