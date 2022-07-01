import React, { useState } from 'react';
import { FilterBlock, FilterCheckboxGroup, FilterInputText } from '../../../entities';
import { checkboxGroupSeller } from '../lib/checkbox-group-data';

export const FilterSeller = React.memo(() => {
    /** Значение input поиска */
    const [searchValue, setSearchValue] = useState('');

  return (
    <FilterBlock name='Продавец' openStatus={true}>
      <FilterInputText
        inputValue={searchValue}
        placeholder='Поиск по магазинам...'
        onChange={(value: string) => setSearchValue(value)}
      />
      <FilterCheckboxGroup checkboxGroupData={checkboxGroupSeller} />
    </FilterBlock>
  );
});

FilterSeller.displayName = 'FilterSeller';
