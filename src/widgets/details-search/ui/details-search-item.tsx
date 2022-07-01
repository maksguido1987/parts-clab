import { useRouter } from 'next/router';
import React from 'react';
import { BracketIcon, SearchIcon } from '../../../entities';
import { ISuggestionItems } from '../../smart-search';

type TProps = Omit<ISuggestionItems, 'id'>

export const DetailsSearchItem: React.FC<TProps> = ({
  conditions,
  slug,
}) => {
  const router = useRouter();

  return (
    <div
      className='flex cursor-pointer px-2 items-center justify-between border-b-2 border-gray-100 hover:bg-gray-50'
      onClick={() => console.log(conditions[0])}
    >
      <div className='flex items-center gap-2'>
        <SearchIcon />
        <span className='leading-7'>{conditions[0]}</span>
      </div>
      <span>
        <BracketIcon />
      </span>
    </div>
  );
};
