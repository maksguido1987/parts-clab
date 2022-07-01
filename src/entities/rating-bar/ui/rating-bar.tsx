import React, { useEffect, useState } from 'react';

interface IProps {
  /** Стили для ширины и высоты компонента */
  className: string;
  /** Число, указывающее рейтинг товара. При отображении делится на 10 */
  done: number;
}

// TODO: подумать, как заставить плавно заполняться полоску
export const RatingBar: React.FC<IProps> = ({ className, done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const progress: React.CSSProperties = {
      width: `${done}%`,
    };
    setStyle(progress);
  }, [done]);

  return (
    <div
      className={`${className ? className : ''} rounded-[20px] shadow-rating`}
    >
      <div
        className='rounded-[20px] bg-green h-full flex items-center justify-center'
        style={style}
      >
        <span className='text-white text-center leading-none text-[10px] py-0.5'>
          {done / 10}
        </span>
      </div>
    </div>
  );
};
