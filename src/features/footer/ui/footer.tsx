import React from 'react';
import {
  AppLink,
  Logo,
  PageLayout,
  TopBarBlock,
} from '../../../entities';
import { Copyright } from './copyright';
import { FooterCardsLogo } from './footer-cards-logo';

export const Footer = React.memo(() => {
  return (
    <footer>
      <PageLayout className='pb-14 pt-5 sm:pt-9 md:pt-12 md:pb-20 lg:pb-28'>
        <footer className='w-full bg-white'>
          <div className='flex md:flex-row flex-col items-center justify-between py-6  border-t-2 border-b-2 border-gray-100'>
            <Logo />
            <div className='flex flex-col md:flex-row justify-items-center md:space-x-5 md:mr-9 md:py-0 py-4'>
              <AppLink type='app-store' />
              <AppLink type='google-play' />
            </div>
          </div>
          <div className='pt-10 flex md:flex-row flex-col items-center md:items-start justify-center md:justify-between'>
            <Copyright titleLink='Брусника Холдинг' path='/' />
            <FooterCardsLogo />
            <ul className='text-xs md:mr-12 text-center md:text-left mb-5 md:mb-0'>
              <TopBarBlock className='text-gray-500 mb-1 hover:text-green' />
            </ul>
          </div>
        </footer>
      </PageLayout>
    </footer>
  );
});

Footer.displayName = 'Footer';
