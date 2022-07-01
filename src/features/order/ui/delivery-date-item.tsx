import React from 'react';

interface IProps {
  date: string;
  label: string;
}

export const DeliveryDateItem: React.FC<IProps> = ({ date, label }) => {
  return (
    <div className='flex items-center text-sm h-12 border border-gray-200 w-full rounded-[10px] px-2.5 sm:px-5'>
      <div className='sm:mr-2.5 mr-1 whitespace-nowrap'>{label}</div>
      <label className='flex items-center whitespace-nowrap truncate'>
        <input
          type='radio'
          className='form-radio rounded-full border-gray-400 checked:bg-radio-checked sm:mr-2.5 focus:ring-transparent mr-1'
          value={''}
          onChange={() => {}}
          checked={true}
        />
        {date}
      </label>
    </div>
  );
};
