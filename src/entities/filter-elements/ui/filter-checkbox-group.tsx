import React, { useState } from 'react';
import { ICheckboxGroupData } from '../../../features';
import { FilterCheckbox } from './filter-checkbox';

interface IProps {
  checkboxGroupData: ICheckboxGroupData[];
}

// TODO: если нужна не одна группа чекбоксов, можно вынести данные, стейт
// TODO: и handleOnChange наружу и передавать пропсами
export const FilterCheckboxGroup: React.FC<IProps> = ({
  checkboxGroupData,
}) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(
    Array.from(checkboxGroupData.map((item) => item.checked))
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, idx) =>
      idx === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  const renderItem = (item: ICheckboxGroupData, idx: number) => {
    const { name, disabled } = item;

    return (
      <FilterCheckbox
        key={idx}
        name={name}
        checked={checkedState[idx]}
        onChange={() => handleOnChange(idx)}
        disabled={disabled}
      />
    );
  };

  return (
    <div>
      {checkboxGroupData.map(renderItem)}
      <div className='text-sm border-b-2 border-dashed border-green inline cursor-pointer'>
        <button className='bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green outline-none'>
          Показать все
        </button>
      </div>
    </div>
  );
};
