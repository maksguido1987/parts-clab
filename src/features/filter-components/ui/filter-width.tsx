import React from 'react';
import { FilterBlock, FilterNumberGroup } from '../../../entities';

export const FilterWidth = React.memo(() => {
  return (
    <FilterBlock name='Ширина' openStatus={false}>
      <FilterNumberGroup
        min={0}
        max={999}
        minNumValue={0}
        maxNumValue={999}
        onMinChange={() => {}}
        onMaxChange={() => {}}
      />
    </FilterBlock>
  );
});

FilterWidth.displayName = 'FilterWidth';
