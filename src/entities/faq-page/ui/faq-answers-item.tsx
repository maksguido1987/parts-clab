import React from 'react';
import { SelectElement } from '../../select-element';
import { IFaqAnswersData } from './faq-answers';

export const FaqAnswersItem: React.FC<IFaqAnswersData> = ({
  title,
  description,
}) => {
  return (
    <div className='mb-3.5 sm:mb-5'>
      <SelectElement
        title={title}
        className='text-base sm:text-2xl font-semibold mb-3.5 sm:mb-5'
      >
        <p className='text-sm sm:text-base pb-3.5'>{description}</p>
      </SelectElement>
      <hr className='border-gray-100' />
    </div>
  );
};
