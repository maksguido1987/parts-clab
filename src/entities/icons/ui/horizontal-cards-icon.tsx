import { IconType } from '../lib/type';

export const HorizontalCardsIcon: React.FC<IconType> = ({ className }) => {
  return (
    <svg
      width='22'
      height='16'
      viewBox='0 0 22 16'
      xmlns='http://www.w3.org/2000/svg'
      className={`${className ? className : ''}`}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0 0H22V2H0V0ZM0 7H22V9H0V7ZM22 14H0V16H22V14Z'
      />
    </svg>
  );
};
