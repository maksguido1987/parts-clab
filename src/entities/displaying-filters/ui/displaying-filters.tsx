import React from 'react';
import { ProductLabel } from '../../labels';

interface IProps {
  /** Выбраные категории фильтра */
  filterData: string[];
}

export const DisplayingFilters: React.FC<IProps> = React.memo(
  ({ filterData }) => {
    const renderItem = (item: string, idx: number) => {
      return (
        <ProductLabel
          name={item}
          key={idx}
          isGray
          className='mr-1 mb-1'
          onClick={() => console.log('close label')}
        />
      );
    };

    return <div className='flex flex-wrap'>{filterData.map(renderItem)}</div>;
  }
);

DisplayingFilters.displayName = 'DisplayingFilters';
