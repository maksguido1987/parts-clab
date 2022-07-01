import React from 'react';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: React.FC<IProps> = React.memo(
  ({ children, className }) => {
    return (
      <section className={className ? className : ''}>
        <div className='md:max-w-[1220px] m-auto md:px-4 px-2'>{children}</div>
      </section>
    );
  }
);

PageLayout.displayName = 'PageLayout';
