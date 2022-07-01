import React, { useState } from 'react';
import { checkboxGroupBrand } from '../lib/checkbox-group-data';
import {
  FilterBlock,
  FilterCheckboxGroup,
  FilterInputText,
} from '../../../entities';

export const FilterBrand = React.memo(() => {
  /** Значение input поиска */
  const [searchValue, setSearchValue] = useState('');

  return (
    <FilterBlock name='Бренд' openStatus={true}>
      <FilterInputText
        inputValue={searchValue}
        placeholder='Поиск по брендам...'
        onChange={(value: string) => setSearchValue(value)}
      />
      <FilterCheckboxGroup checkboxGroupData={checkboxGroupBrand} />
    </FilterBlock>
  );
});

FilterBrand.displayName = 'FilterBrand';
