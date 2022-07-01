import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../../../../public/img/header-footer/logo.png';
import React from 'react';

export const Logo = React.memo(() => {
  return (
    <div className='w-24 md:w-32 lg:w-40 h-6 md:h-9 lg:h-12 lg:mr-5 cursor-pointer'>
      <Link href='/'>
        <a>
          <Image src={LogoImage} alt='PartsClub LOGO' />
        </a>
      </Link>
    </div>
  );
});

Logo.displayName = 'Logo';
