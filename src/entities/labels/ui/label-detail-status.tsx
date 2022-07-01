import React from 'react';

interface IProps {
  /** Флаг, если true - новая детать, иначе аналог */
  isNewDetail?: boolean;
  /** Название детали, аналог которой представлен */
  analogDetail?: string;
  className?: string;
}

export const LabelDetailStatus: React.FC<IProps> = ({
  isNewDetail,
  analogDetail,
  className,
}) => {
  return (
    <div
      className={`${isNewDetail ? 'bg-green-light' : 'bg-yellow-50'} ${
        className ? className : ''
      } text-[10px] sm:text-xs max-w-max leading-4 inline-block px-2 py-0.5 text-gray-400 rounded-full`}
    >
      {isNewDetail ? (
        <span className=''>Новая запчасть</span>
      ) : (
        <>
          <span className=''>
            Аналог оригинальной запчасти
            <span
              className='text-black uppercase border-b border-dotted border-green ml-1.5 hover:text-green transition cursor-pointer'
              onClick={() => console.log('название детали')}
            >
              {analogDetail}
            </span>
          </span>
        </>
      )}
    </div>
  );
};
