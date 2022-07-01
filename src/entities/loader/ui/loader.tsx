import React from 'react';

interface IProps {
  widthLoader?: string;
  sizeItem?: number;
  className?: string;
}

export const Loader: React.FC<IProps> = ({
  widthLoader,
  sizeItem,
  className,
}) => {
  return (
    <div
      className={`${widthLoader ? widthLoader : 'w-[30px]'} ${
        className ? className : ''
      } flex items-center justify-between`}
    >
      <div
        className={`${
          sizeItem ? '' : 'h-1.5 w-1.5'
        } animate-loader rounded-full bg-green [animation-delay:0.45s]`}
      ></div>
      <div
        className={`${
          sizeItem ? '' : 'h-1.5 w-1.5'
        } animate-loader rounded-full bg-green [animation-delay:1.05s]`}
      ></div>
      <div
        className={`${
          sizeItem ? '' : 'h-1.5 w-1.5'
        } animate-loader rounded-full bg-green [animation-delay:1.35s]`}
      ></div>
    </div>
  );
};
