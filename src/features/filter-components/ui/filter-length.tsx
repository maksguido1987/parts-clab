import React, { useState } from 'react';
import { FilterBlock, FilterNumberGroup } from '../../../entities';

export const FilterLength = React.memo(() => {
  /** Стейт для длины */
  const [length, setLength] = useState({
    minNumValue: 0,
    maxNumValue: 999,
  });
  const { minNumValue, maxNumValue } = length;

  return (
    <FilterBlock name='Длина' openStatus={true}>
      <FilterNumberGroup
        min={0}
        max={999}
        minNumValue={minNumValue}
        maxNumValue={maxNumValue}
        onMinChange={(value: number) => {
          setLength((prevState) => {
            return { ...prevState, minNumValue: value };
          });
        }}
        onMaxChange={(value: number) => {
          setLength((prevState) => {
            return { ...prevState, maxNumValue: value };
          });
        }}
      />
    </FilterBlock>
  );
});

FilterLength.displayName = 'FilterLength';
