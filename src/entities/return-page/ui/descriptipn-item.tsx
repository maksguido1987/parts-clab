import React from 'react';
import { IReturnData } from './return-description';

export const DescriptionItem: React.FC<IReturnData> = React.memo(
  ({ title, beforeListDescription, afterListDescription, list, important }) => {
    const renderListItem = (text: string, idx: number) => {
      return (
        <li key={idx} className='mb-5 last:mb-7 flex items-start'>
          <span className='w-2.5 h-2.5 mt-1.5 sm:mt-2 rounded-full bg-gradient-to-r from-green-bg to-green shrink-0'></span>
          <span className=' pl-2'>{text}</span>
        </li>
      );
    };

    const renderImportantItem = (text: string, idx: number) => {
      if (text === '') return;

      /** Вытаскиваем из всего текста 1-ое слово, чтобы его покрасить в красный, затем всё обьединяем */
      const firstWord = text.split(' ')[0];
      const newText = text.split(' ').slice(1).join(' ');

      return (
        <div
          key={idx}
          className='bg-red-100 inline-block rounded-[10px] px-2.5 sm:px-5 py-3.5 mb-5'
        >
          <span className='text-red-500'>{firstWord}</span>
          <span> {newText}</span>
        </div>
      );
    };

    return (
      <div className='lg:flex'>
        <div className='text-[15px] sm:text-xl lg:text-2xl font-semibold mb-5 basis-1/2 lg:pr-64'>
          {title}
        </div>
        <div className='text-sm sm:text-base pb-2 lg:pb-10 basis-1/2'>
          <div className='mb-7'>{beforeListDescription}</div>
          <ul className='mb-5'>{list.map(renderListItem)}</ul>
          <div className='mb-5'>{afterListDescription}</div>
          <div>{important.map(renderImportantItem)}</div>
        </div>
      </div>
    );
  }
);

DescriptionItem.displayName = 'DescriptionItem';
