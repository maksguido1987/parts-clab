import React from 'react';
import { IconType } from '../lib/type';

/** Иконка для выпадающих списков/аккардеон */
export const AccardeonArrow: React.FC<IconType> = ({
  color,
  className,
  width = 18,
  height = 18,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className ? className : ''}`}
    >
      <path
        d='M1.33023 4.87973C1.2346 4.97526 1.15873 5.0887 1.10697 5.21356C1.05521 5.33843 1.02856 5.47227 1.02856 5.60744C1.02856 5.74262 1.05521 5.87646 1.10697 6.00133C1.15873 6.12619 1.2346 6.23963 1.33023 6.33516L8.3168 13.3269C8.41233 13.4225 8.52577 13.4984 8.65063 13.5501C8.7755 13.6019 8.90935 13.6285 9.04452 13.6285C9.17969 13.6285 9.31353 13.6019 9.4384 13.5501C9.56326 13.4984 9.6767 13.4225 9.77223 13.3269L16.7588 6.33516C16.8582 6.24051 16.9377 6.12691 16.9926 6.00105C17.0474 5.8752 17.0765 5.73963 17.0782 5.60235C17.0798 5.46507 17.0539 5.32886 17.0021 5.20173C16.9503 5.0746 16.8735 4.95914 16.7763 4.86215C16.6792 4.76516 16.5636 4.6886 16.4364 4.63699C16.3092 4.58537 16.1729 4.55975 16.0356 4.56163C15.8983 4.56351 15.7628 4.59285 15.6371 4.64792C15.5113 4.70299 15.3978 4.78269 15.3034 4.8823L9.04452 11.1463L2.78566 4.8823C2.6903 4.7865 2.577 4.71043 2.45222 4.65845C2.32745 4.60647 2.19365 4.57959 2.05848 4.57935C1.92331 4.57911 1.78942 4.60552 1.66446 4.65706C1.5395 4.7086 1.42593 4.78427 1.33023 4.87973Z'
        fill={color ? color : '#000'}
      />
    </svg>
  );
};
