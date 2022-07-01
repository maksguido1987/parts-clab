import React from 'react';

type Props = {
  isColor?: boolean;
  clickWrapper?: boolean;
  onOpenSubMenu: () => void;
  show: boolean;
};

export const Burger: React.FC<Props> = React.memo(
  ({ isColor, clickWrapper, onOpenSubMenu, show }) => {
    return (
      <div className='p-2 flex items-center justify-center'>
        <div
          className='w-6 h-4 cursor-pointer relative z-10'
          onMouseDown={onOpenSubMenu}
        >
          <span
            className={`absolute transition ${
              isColor ? 'bg-white' : 'bg-blue'
            } ${
              show ? 'rotate-45 top-1/2 -translate-y-1/2' : 'top-0'
            } w-6 h-0.5`}
          ></span>
          <span
            className={`absolute transition ${
              isColor ? 'bg-white' : 'bg-blue'
            } ${
              show ? 'scale-0' : ''
            } w-5 h-0.5 top-2 -translate-y-1/2 left-0.5`}
          ></span>
          <span
            className={`absolute transition ${
              isColor ? 'bg-white' : 'bg-blue'
            } ${
              show ? '-rotate-45 bottom-1/2 translate-y-1/2' : 'bottom-0'
            } w-6 h-0.5`}
          ></span>
          <span
            className={`absolute ${
              clickWrapper
                ? '-top-2 -bottom-2 -left-3 w-32 h-7'
                : '-top-4 -left-4 w-14 h-12'
            }`}
          ></span>
        </div>
      </div>
    );
  }
);

Burger.displayName = 'Burger';
