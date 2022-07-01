import { useRouter } from 'next/router';
import React from 'react';
import { IServiceMenuItems, menuItems } from '../lib/menu-items';
import { TopBarLink } from './top-bar-link';

interface IProps {
  className?: string;
}

export const TopBarBlock: React.FC<IProps> = ({ className }) => {
  const router = useRouter();

  const renderHeaderItem = (item: IServiceMenuItems, idx: number) => {
    const { name, path } = item;
    return (
      <TopBarLink
        key={idx}
        text={name}
        className={`${className ? `${className}` : ''}`}
        onClick={path ? () => router.push(path) : undefined}
      />
    );
  };

  return <>{menuItems.map(renderHeaderItem)}</>;
};
