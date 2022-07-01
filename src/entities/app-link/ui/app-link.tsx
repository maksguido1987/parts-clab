import React, { ReactNode } from 'react';
import Image from 'next/image';
import appStoreIcon from '../../../../public/img/header-footer/app-store.svg';
import googlePlayIcon from '../../../../public/img/header-footer/google-play.svg';

interface IProps {
  type: 'app-store' | 'google-play';
}

export const AppLink: React.FC<IProps> = React.memo(({ type }) => {
  let icon: ReactNode;
  let path: string;

  switch (type) {
    case 'app-store':
      icon = <Image width={120} height={36} src={appStoreIcon} alt='app-store' />;
      path = '#';
      break;
    case 'google-play':
      icon = <Image width={120} height={36} src={googlePlayIcon} alt='google-play' />;
      path = '#';
      break;
  }
  return <a href={path} className='flex items-center justify-center md:mb-0 my-1'>{icon}</a>;
});

AppLink.displayName = 'AppLink';
