import Image from 'next/image';
import deleteGreen from '../../../../public/img/delete.svg';
import deleteGray from '../../../../public/img/delete-gray.svg';

interface IProps {
  /** Наименование раздела или товара */
  name: string;
  /** Флаг, определяет серей цвет, зелёный по умолчанию */
  isGray?: boolean;
  /** Событие по клику */
  onClick: () => void;
  /** Дополнительные стили */
  className?: string;
  isSelectCar?: boolean;
}

export const ProductLabel: React.FC<IProps> = ({
  name,
  isGray,
  onClick,
  className,
  isSelectCar,
}) => {
  return (
    <div
      className={`${className ? className : ''} ${
        isGray
          ? 'rounded-md bg-gray-100 px-3 py-1'
          : isSelectCar
          ? 'rounded-full bg-green-light px-3 py-1.5 md:px-2.5 md:py-1.5'
          : 'rounded-full bg-green-light px-3 py-1.5 md:px-4 md:py-2.5'
      } group flex cursor-pointer items-center shadow-md transition hover:shadow-none md:shadow-carouselBtn`}
    >
      <span
        className={`${isGray ? 'mr-1' : 'mr-2'} text-xs text-green sm:text-sm`}
      >
        {name}
      </span>
      <div className='flex transition group-hover:scale-125' onClick={onClick}>
        <Image
          src={isGray ? deleteGray : deleteGreen}
          alt={name}
          width={isGray ? 16 : 10}
          height={isGray ? 16 : 10}
        />
      </div>
    </div>
  );
};
