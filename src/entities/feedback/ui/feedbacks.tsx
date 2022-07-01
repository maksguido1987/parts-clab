import React from 'react';
import { Feedback, IFeedbackProps } from './feedback';

interface IProps {
  feedbacks: IFeedbackProps[];
}

export const Feedbacks: React.FC<IProps> = React.memo(({ feedbacks }) => {
  const renderItem = (item: IFeedbackProps, idx: number) => {
    const { name, feedback, date, rating } = item;
    return (
      <Feedback
        name={name}
        feedback={feedback}
        date={date}
        rating={rating}
        key={idx}
      />
    );
  };

  return <div className='mb-[25px] md:pr-5'>{feedbacks.map(renderItem)}</div>;
});

Feedbacks.displayName = 'Feedbacks';
