import React from 'react';
import { IconType } from '../lib/type';

export const CrownIcon: React.FC<IconType> = ({
  className,
  width = 14,
  height = 14,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className ? className : ''}
    >
      <g clipPath='url(#clip0_374_3860)'>
        <path
          d='M13.9995 4.61695C13.9995 4.08973 13.5722 3.66238 13.045 3.66238C12.5178 3.66238 12.0905 4.08973 12.0905 4.61695C12.092 4.65573 12.0958 4.69439 12.1021 4.73274L9.32994 6.11883L7.50635 3.51359C7.95314 3.23364 8.08825 2.64457 7.8083 2.19789C7.52846 1.75109 6.93939 1.61587 6.4926 1.89582C6.04591 2.17578 5.91069 2.76484 6.19064 3.21153C6.26722 3.33372 6.3704 3.43701 6.4926 3.51359L4.66911 6.11883L1.89692 4.73274C1.90312 4.69439 1.90707 4.65573 1.90857 4.61695C1.91113 4.08973 1.48581 3.66035 0.958691 3.65779C0.431576 3.65522 0.00208663 4.08044 -0.000476849 4.60766C-0.0028267 5.09162 0.357342 5.50071 0.837673 5.55978L1.90867 10.3797V11.617C1.90867 11.7927 2.05105 11.9351 2.22676 11.9351H11.7723C11.948 11.9351 12.0905 11.7927 12.0905 11.617V10.3797L13.1614 5.55967C13.6386 5.502 13.9981 5.09771 13.9995 4.61695ZM13.045 4.29876C13.2208 4.29876 13.3631 4.44125 13.3631 4.61695C13.3631 4.79277 13.2208 4.93515 13.045 4.93515C12.8692 4.93515 12.7268 4.79277 12.7268 4.61695C12.7269 4.44125 12.8692 4.29887 13.045 4.29876ZM6.99952 2.38972C7.17523 2.38972 7.31772 2.5321 7.31772 2.70791C7.31772 2.88362 7.17523 3.0261 6.99952 3.0261C6.82382 3.0261 6.68133 2.88362 6.68133 2.70791C6.68144 2.53221 6.82382 2.38983 6.99952 2.38972ZM5.03291 6.70843L6.99952 3.89918L8.96614 6.70843C9.0565 6.83778 9.22804 6.88125 9.36914 6.81065L12.3843 5.30322C12.4319 5.34851 12.4839 5.38888 12.5396 5.42349L11.5171 10.0261H2.48193L1.45942 5.42349C1.51518 5.38877 1.5672 5.34851 1.61473 5.30322L4.62991 6.81065C4.77101 6.88104 4.94244 6.83757 5.03291 6.70843ZM0.635906 4.61695C0.635906 4.44125 0.778286 4.29876 0.954098 4.29876C1.1298 4.29876 1.27229 4.44125 1.27229 4.61695C1.27229 4.79277 1.1298 4.93515 0.954098 4.93515C0.778393 4.93504 0.636013 4.79266 0.635906 4.61695ZM11.4541 11.2988H2.54495V10.6624H11.4541V11.2988Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_374_3860'>
          <rect width='14' height='14' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};
