import React from 'react';
import Image from 'next/image';
import { ISearchGuideItem } from './search-guide';

export const GuideItem: React.FC<ISearchGuideItem> = ({
  title,
  list,
  screenshot,
}) => {
  const renderListItem = (text: string, idx: number) => {
    return (
      <li key={idx} className='mb-5 flex'>
        <div className='mr-2.5 md:mr-5'>
          <div className='flex items-center justify-center w-9 h-9 bg-gradient-to-r from-[#5dc5637f] to-[#34eac77f] rounded-full'>
            <div className='w-6 h-6 flex items-center justify-center bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full text-white'>
              {idx + 1}
            </div>
          </div>
        </div>
        <span className='text-sm md:text-lg'>{text}</span>
      </li>
    );
  };

  return (
    <>
      <div className='md:flex'>
        <div className='text-sm md:text-lg font-semibold mb-7 md:basis-1/3 lg:pr-40'>
          {title}
        </div>
        <div className='md:basis-2/3'>
          <ul>{list.map(renderListItem)}</ul>
          <div className='mb-4 md:mb-7'>
            <Image width={798} height={459} alt='how-search' src={screenshot} />
          </div>
        </div>
      </div>
      <hr className='border-gray-100 mb-4 md:mb-7 last:hidden' />
    </>
  );
};
