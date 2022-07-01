import React from 'react';

interface IProps {
  children: React.ReactNode[];
  isOpen: boolean;
  className?: string;
}

export const Dropdown = React.forwardRef<HTMLDivElement, IProps>(
  ({ children, isOpen, className }, ref) => {
    return (
      <div ref={ref} className='relative'>
        {children[0]}
        {isOpen && (
          <div
            className={`${
              className ? className : ''
            } absolute z-40 animate-showModal right-0 mt-2.5 rounded-lg shadow-sortingProducts py-2.5 bg-white`}
          >
            {children[1]}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = 'Dropdown';
