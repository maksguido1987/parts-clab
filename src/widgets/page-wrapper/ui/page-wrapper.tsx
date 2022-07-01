import React from 'react';
import { Footer } from '../../../features';
import { Header } from '../../header';
import { useLoadSuggestions } from '../../smart-search';

type Props = {
  children: React.ReactNode;
};

export const PageWrapper: React.FC<Props> = React.memo(({ children }) => {
  useLoadSuggestions();
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='min-w-full grow pt-[60px] md:pt-[150px]'>
        {children}
      </main>
      <Footer />
    </div>
  );
});

PageWrapper.displayName = 'PageWrapper';
