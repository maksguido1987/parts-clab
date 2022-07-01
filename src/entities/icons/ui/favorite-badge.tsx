import React from 'react';
import { IconType } from '../lib/type';

export const FavoriteBadge: React.FC<IconType> = ({
  color,
  className,
  width = 16,
  height = 16,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className ? className : ''}
    >
      <g clipPath='url(#clip0_144_10683)'>
        <path
          d='M2.71615 15.5H2.71631C2.7832 15.5 2.90203 15.4683 3.04931 15.3425L3.05044 15.3415L7.20271 11.8161C7.20293 11.8159 7.20315 11.8157 7.20338 11.8155C7.4348 11.6182 7.73905 11.5239 8.03156 11.5239C8.32454 11.5239 8.62831 11.6185 8.8598 11.8159L2.71615 15.5ZM2.71615 15.5C2.64915 15.5 2.5906 15.4694 2.55327 15.4158L2.71615 15.5ZM12.9993 15.3415L8.8603 11.8164L2.55321 15.4158C2.50483 15.3463 2.46387 15.242 2.46387 15.0911V1.3582C2.46387 0.921844 2.87954 0.5 3.38379 0.5H12.6672C13.1478 0.5 13.5368 0.898823 13.5368 1.3582V15.0912C13.5368 15.311 13.476 15.409 13.4426 15.446C13.4098 15.4823 13.3684 15.5001 13.3174 15.5001C13.2593 15.5001 13.1563 15.4755 12.9997 15.3419L12.9993 15.3415Z'
          stroke={color ? color : '#000'}
        />
      </g>
      <defs>
        <clipPath id='clip0_144_10683'>
          <rect width='16' height='16' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
