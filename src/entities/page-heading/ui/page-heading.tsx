import React from 'react';

interface IProps {
  /** Заголовок */
  title: string;
  className?: string;
}

export const PageHeading: React.FC<IProps> = React.memo(
  ({ title, className }) => {
    return (
      <div className={`${className ? className : ''} text-lg sm:text-2xl font-semibold mb-2`}>
        <h2 className=''>
          {title}
        </h2>
      </div>
    );
  }
);

PageHeading.displayName = 'PageHeading';
