import React from 'react';
import { FilterBlock, FilterNumberGroup } from '../../../entities';

export const FilterHeight = React.memo(() => {
  return (
    <FilterBlock name='Высота' openStatus={false}>
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

FilterHeight.displayName = 'FilterHeight';
