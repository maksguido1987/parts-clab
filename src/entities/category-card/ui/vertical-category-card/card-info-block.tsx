import React from 'react';
import { useToggle } from '../../../../shared/lib/hooks/use-toggle';
import { HeadingProductBage } from '../../../icons';
import { LabelDetailStatus } from '../../../labels';
import { TooltipCategoryCard } from '../../../tooltips';
import { ICardInfoBlock } from '../../lib';
import { dataCardTooltip } from '../../lib/data-tooltip';
import { CardField } from '../card-field';

export const CardInfoBlock: React.FC<ICardInfoBlock> = React.memo(
  ({ name, brand, articul, applicability, children }) => {
    /** Состояние отображения тултипа */
    const [isTooltip, setIsTooltip] = useToggle();

    return (
      <div className='grow'>
        <div className='font-semibold text-sm mb-2 flex justify-between'>
          {name}
          <HeadingProductBage className='group-hover:fill-current text-green mt-1 sm:hidden' />
        </div>
        <div className='sm:hidden'>
          <LabelDetailStatus analogDetail='2205-C-415 (BMW)' className='mb-2' />
        </div>
        <CardField name='Бренд'>{brand}</CardField>
        <CardField name='Артикул' isBorder className='cursor-pointer relative'>
          <span onClick={setIsTooltip}>
            {articul.length === 1 ? articul[0] : `${articul.length} артикулов`}
          </span>
          {isTooltip && <TooltipCategoryCard dataTooltip={dataCardTooltip} />}
        </CardField>
        <CardField name='Состояние'>
          <span className='text-green rounded-full bg-green-light px-2'>
            Новый
          </span>
        </CardField>
        <CardField name='Применимость' isBorder className='uppercase'>
          <span className='sm:inline hidden'>
            {applicability[0]} + <span className='lowercase'>ещё</span>{' '}
            {applicability.length - 1}
          </span>
          <span className='sm:hidden'>
            {applicability.map((item, idx) => {
              return (
                <span key={idx} className='pl-2 uppercase'>
                  {item}
                </span>
              );
            })}
          </span>
        </CardField>
      </div>
    );
  }
);

CardInfoBlock.displayName = 'CardInfoBlock';
