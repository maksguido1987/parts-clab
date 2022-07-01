import React, { ReactNode } from 'react';

interface IProps {
  /** Название товара */
  name: string;
  /** Дочерний компонент, в данном случаем всплывающий тултип */
  children: ReactNode;
  /** Флаг, отвечает, будет ли текст подчеркнут */
  isBorder?: boolean;
  /** Дополнительные классы */
  className?: string;
}

export const CardField: React.FC<IProps> = React.memo(
  ({ name, children, isBorder, className }) => {
    return (
      <div className='text-gray-400 mb-1 text-xs sm:text-sm'>
        {name}:{' '}
        <span
          className={`${className ? className : ''} ${
            isBorder ? 'border-b border-dashed border-green' : ''
          } text-black`}
        >
          {children}
        </span>
      </div>
    );
  }
);

CardField.displayName = 'CardField';
