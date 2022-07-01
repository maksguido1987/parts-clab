import React from 'react';
import { RatingBar } from '../../rating-bar';

export interface IFeedbackProps {
  /** ФИО или ник */
  name: string;
  /** Текст отзыва */
  feedback: string;
  /** Дата создания */
  date: number;
  /** Оценка товара */
  rating: number;
}

export const Feedback: React.FC<IFeedbackProps> = ({
  name,
  feedback,
  date,
  rating,
}) => {
  // TODO поработать с приходящей датой
  const getDate = () => {
    const time = new Date(date).getFullYear()
    return <span>{time}</span>
  }

  return (
    <>
      <div className='flex justify-between'>
        <div className='pr-2'>
          <div className='mb-2 text-xs sm:text-base'>{name === '' ? 'Без имени' : name}</div>
          <div className='text-blue text-xs sm:text-sm mb-1.5'>{feedback}</div>
          <div className='text-[10px] sm:text-sm text-blue opacity-50'>{getDate()}</div>
        </div>
        <div>
          <RatingBar className='w-[52px] sm:w-20 md:w-28' done={rating} />
        </div>
      </div>
      <hr className='border-gray-100 my-3.5' />
    </>
  );
};
