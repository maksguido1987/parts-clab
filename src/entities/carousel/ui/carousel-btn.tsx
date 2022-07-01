import { AccardeonArrow } from '../../icons';

interface IProps {
  /** Передаем радиус поворота стрелки */
  radius: string;
  className: string;
  onClick: (e: React.MouseEvent) => void;
  isProductCard?: boolean;
}

export const CarouselBtn: React.FC<IProps> = ({
  radius,
  className,
  onClick,
  isProductCard,
}) => {
  let rotate = '';
  switch (radius) {
    case '90':
      rotate = 'rotate-90';
      break;
    case '-90':
      rotate = '-rotate-90';
      break;
    default:
      rotate = 'rotate-0';
  }

  return (
    <div
      className={`${className ? className : ''} ${
        isProductCard
          ? 'bg-gray-200 hidden lg:flex w-7 h-7 border-white border'
          : 'bg-white shadow-carouselBtn flex w-5 h-5'
      } items-center justify-center shrink-0 select-none cursor-pointer absolute top-1/2 z-10 -translate-y-1/2  rounded-full transition`}
      onClick={onClick}
    >
      <span
        className={`${rotate} ${
          isProductCard ? 'w-[17px] h-[17px]' : 'w-3 h-3'
        } flex items-center justify-center`}
      >
        <AccardeonArrow color={isProductCard ? '#ffffff' : '#5DC563'} />
      </span>
    </div>
  );
};
