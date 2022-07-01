import React from 'react';
import { Button } from '../../../entities';

export const RequestSmall: React.FC = React.memo(() => {
  return (
    <div className='w-full h-full bg-green-card'>
      <div className='py-7 h-full bg-selection-sm bg-no-repeat bg-right-bottom px-3'>
        <h2 className='text-lg md:mb-4 leading-6 font-semibold mb-2.5'>
          <span className='text-green'>Бесплатно</span> <br /> ищем детали за
          вас
        </h2>
        <p className='text-sm leading-5 mb-4'>
          Когда нет времени искать <br /> или нужна консультация специалиста
        </p>
        <Button
          size='small-btn'
          color='purple'
          name='Запрос на подбор детали по VIN'
          className='text-xs text-white w-216px'
          onClick={() => console.log('request-btn')}
        />
      </div>
    </div>
  );
});

RequestSmall.displayName = 'RequestSmall';
