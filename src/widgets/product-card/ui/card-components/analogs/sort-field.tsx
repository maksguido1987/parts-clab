import React, { useState } from 'react';
import {
  SortDropdown,
  SortDropdownBrand,
  SortDropdownSeller,
} from '../../../../../entities';

export const SortField = React.memo(() => {
  /** Значение input поиска */
  const [searchBrand, setSearchBrand] = useState('');
  const [searchShop, setSearchShop] = useState('');

  return (
    <div className='flex items-center justify-between py-2.5 sm:py-5'>
      <div className='flex'>
        <div className='sm:mr-5 mr-2.5 relative'>
          <SortDropdownSeller
            searchBrand={searchBrand}
            setSearchBrand={setSearchBrand}
          />
        </div>
        <div className='sm:mr-5 mr-2.5 relative'>
          <SortDropdownBrand
            searchShop={searchShop}
            setSearchShop={setSearchShop}
          />
        </div>
        <div className='w-[100px] sm:w-[150px]'>
          <SortDropdown isProductCard />
        </div>
      </div>
    </div>
  );
});

SortField.displayName = 'SortField';
