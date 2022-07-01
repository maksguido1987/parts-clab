import React from 'react';

export interface ITab {
  /** Заголовок */
  label: string;
}

interface IProps extends ITab {
  /** Номер активного таба */
  active: string;
  /** Выполняемая функция */
  onClick: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  page?: 'card' | 'shop' | 'order' | 'my-order';
}

export const TabItem: React.FC<IProps> = ({ label, active, onClick, page }) => {
  let baseStyle = '';
  let activeStyle = '';
  let inactiveStyle = '';
  let activeLabel = '';
  switch (page) {
    case 'shop':
      baseStyle = 'py-1 hover:bg-gray-50';
      activeStyle = 'border-b border-green cursor-default';
      inactiveStyle = 'cursor-pointer';
      activeLabel = 'text-green';
      break;
    case 'order':
      baseStyle =
        'text-sm rounded-[10px] px-5 h-12 flex items-center justify-center mb-2.5 last:mb-0 sm:mb-0 sm:mr-5 last:mr-0';
      activeStyle = 'bg-green hover:bg-green-hover border-none cursor-default';
      inactiveStyle =
        'bg-white hover:border-green border border-gray-200 cursor-pointer';
      activeLabel = 'text-white';
      break;
    case 'my-order':
      baseStyle =
        'text-xs lg:text-sm rounded-[10px] px-5 h-10 lg:h-12 flex items-center justify-center mr-2.5 lg:mr-5 last:mr-0';
      activeStyle = 'bg-green hover:bg-green-hover border-none cursor-default';
      inactiveStyle =
        'bg-white hover:border-green border border-gray-200 cursor-pointer';
      activeLabel = 'text-white';
      break;
    default:
      baseStyle = 'py-2.5 -mb-[1px] hover:bg-gray-50';
      activeStyle = 'border-b border-green cursor-default';
      inactiveStyle = 'cursor-pointer';
      activeLabel = 'text-green';
  }

  return (
    <div
      className={`${baseStyle} ${
        label === active ? activeStyle : inactiveStyle
      } transition`}
      onClick={onClick}
    >
      <div className={`${label === active ? activeLabel : ''} transition`}>
        {label}
      </div>
    </div>
  );
};
