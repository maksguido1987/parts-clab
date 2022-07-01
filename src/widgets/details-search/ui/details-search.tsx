import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Loader } from '../../../entities';
import { api } from '../../../shared/api';
import { useClickOutside, useDebounce } from '../../../shared/lib';
import { ISuggestionItems } from '../../smart-search';
import { DetailsSearchResults } from './details-search-results';
import darkSearchImg from '../../../../public/img/header-footer/dark-search.svg';

interface IProps {
  placeholder: string;
  isMobile?: boolean;
  className?: string;
}

export const DetailsSearch: React.FC<IProps> = React.memo(
  ({ placeholder, isMobile, className }) => {
    const [value, setValue] = useState('');
    const [details, setDetails] = useState<ISuggestionItems[] | undefined>(
      undefined
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isOpenResults, setIsOpenResults] = useState(false);
    const detailsSearchRef = useClickOutside(() => setIsOpenResults(false));
    const debounceValue = useDebounce(value, 2000);

    const isCorrectSerchResults =
      details && isOpenResults && !isLoading && value !== '';

    const getDetails = async (value: string) => {
      setIsLoading(true);
      const res = await api.get(`/suggestions/search/${value}`);
      setDetails(res.data.details);
      setIsLoading(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setValue(value);
    };

    const handleClick = () => {
      value && getDetails(value.trim());
    };

    const handleFocus = () => {
      setIsOpenResults(true);
    };

    useEffect(() => {
      debounceValue && getDetails(debounceValue.trim());
    }, [debounceValue]);

    return (
      <div
        ref={detailsSearchRef}
        className={`${
          isMobile
            ? 'my-1 mx-auto flex h-12 w-full grow md:hidden'
            : 'hidden h-16 sm:grow md:flex'
        } ${
          className
            ? className
            : ''
        } relative z-10`}
      >
        <input
          className='h-full grow border-transparent lg:px-5 px-2 tracking-wide focus:border-green focus:ring-transparent'
          type='text'
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          disabled={isLoading}
        />
        {isLoading ? (
          <Loader className='absolute top-1/2 right-4 -translate-y-1/2' />
        ) : (
          <button
            className='absolute top-1/2 lg:right-4 right-2 flex -translate-y-1/2 items-center rounded-md bg-green-light lg:p-2 p-1 transition'
            onClick={handleClick}
          >
            <Image
              src={darkSearchImg}
              width={20}
              height={20}
              alt='search-button'
            />
          </button>
        )}
        {isCorrectSerchResults && (
          <DetailsSearchResults className={`${isMobile ? 'top-12' : 'top-[64px]'}`} details={details} show={true} />
        )}
      </div>
    );
  }
);

DetailsSearch.displayName = 'DetailsSearch';
