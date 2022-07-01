import React from 'react';
import { IRatingPointProps, RatingPoint } from './rating-point';

interface IProps {
  ratingPoints: IRatingPointProps[];
  children?: React.ReactNode;
}

export const SellerRating: React.FC<IProps> = ({ ratingPoints, children }) => {
  const renderItem = (item: IRatingPointProps, idx: number) => {
    const { title, done } = item;
    return idx === 0 ? (
      <RatingPoint title={title} done={done} key={idx} >
        {children}
      </RatingPoint>
    ) : (
      <RatingPoint title={title} done={done} key={idx}  />
    );
  };

  return <>{ratingPoints.map(renderItem)}</>;
};
