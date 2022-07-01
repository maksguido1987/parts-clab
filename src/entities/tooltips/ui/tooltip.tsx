import React from 'react';

export interface ITooltipProps {
  children: React.ReactNode;
  className: string;
  /** Булеан значение, от которого зависит, показывать тултип, либо скрвать */
  isShowTooltip: boolean;
  /** Флаг, определяет положение стрелки на тултипе */
  isTop?: boolean;
}

export const Tooltip: React.FC<ITooltipProps> = ({
  children,
  className,
  isShowTooltip,
  isTop,
}) => {
  return (
    <div
      className={`${className ? className : ''} ${
        isShowTooltip ? 'block animate-pullUp' : 'opacity-0 hidden'
      } ${
        isTop ? 'rounded-md' : 'rounded-b-md rounded-tr-md'
      } bg-white p-2 text-xs shadow-tooltipCard absolute z-10 font-normal`}
    >
      <div
        className={`${
          isTop
            ? 'border-t-[15px] border-t-white top-full'
            : 'border-b-[15px] border-b-white -top-[12px]'
        } w-0 h-0 absolute left-5 border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent`}
      ></div>
      {children}
    </div>
  );
};
