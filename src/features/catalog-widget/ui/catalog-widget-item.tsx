import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ICatalogWidgetItem } from '../lib/catalog-widget-items';

interface IProps extends ICatalogWidgetItem {
  /** Флаг для последнего компонента, открывает все категории */
  isLast?: boolean;
}

export const CatalogWidgetItem: React.FC<IProps> = ({
  name,
  image,
  alt,
  link,
  isLast,
}) => {
  const router = useRouter();

  return (
    <div className='cursor-pointer '>
      <a onClick={() => router.push(link)} className='flex flex-col'>
        <div className='h-24 md:h-40 bg-green-card sm:rounded-[10px] flex items-center justify-center mb-3 sm:mb-4'>
          <div className='h-5/6 w-5/6 relative'>
            <Image
              src={image}
              alt={alt}
              layout='fill'
              objectFit={`${isLast ? 'none' : 'contain'}`}
            />
          </div>
        </div>
        <span className='md:text-base text-xs text-center'>{name}</span>
      </a>
    </div>
  );
};
