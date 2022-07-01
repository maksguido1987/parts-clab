import React, { useState } from 'react';
import { FilterBlock, FilterRangeGroup } from '../../../entities';

export const FilterPrice = React.memo(() => {
  // TODO: можно обьединить в один useReduser
  /** Значение прогресс-бара, отвечающего за минимальное/максимальное значение (input range и number, связанного с range) */
  const [minRangeValue, setMinRangeValue] = useState(0);
  const [maxRangeValue, setMaxRangeValue] = useState(99);

  return (
    <FilterBlock name='Цена' openStatus={true}>
      <FilterRangeGroup
        minRangeValue={minRangeValue}
        min={0}
        max={99}
        maxRangeValue={maxRangeValue}
        onSetMinRangeValue={(value: number) => setMinRangeValue(value)}
        onSetMaxRangeValue={(value: number) => setMaxRangeValue(value)}
      />
    </FilterBlock>
  );
});

FilterPrice.displayName = 'FilterPrice';
