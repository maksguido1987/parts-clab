import React, { useState } from 'react';
import { FilterBlock, FilterRadioGroup } from '../../../entities';
import { radioGroupData } from '../lib/radio-group-data';

export const FilterType = React.memo(() => {
  /** Контроль группы радио кнопок */
  const [radioValue, setRadioValue] = useState('Новые');

  return (
    <FilterBlock name='Тип' openStatus={true}>
      <FilterRadioGroup
        radioValue={radioValue}
        radioGroupData={radioGroupData}
        onChange={(value: string) => setRadioValue(value)}
      />
    </FilterBlock>
  );
});

FilterType.displayName = 'FilterType';
