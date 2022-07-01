import React from 'react';
import { useToggle } from '../../../../shared/lib/hooks/use-toggle';
import { HeadingProductBage } from '../../../icons';
import { LabelDetailStatus } from '../../../labels';
import { TooltipCategoryCard } from '../../../tooltips';
import { ICardInfoBlock } from '../../lib';
import { dataCardTooltip } from '../../lib/data-tooltip';
import { CardField } from '../card-field';

export const HorizontalCardInfoBlock: React.FC<ICardInfoBlock> = React.memo(
  ({ name, brand, articul, applicability }) => {
    /** Состояние отображения тултипа */
    const [isTooltip, setIsTooltip] = useToggle();

    return (
      <div className='flex-grow mb-2.5 md:mb-0'>
        <div className='font-semibold text-sm mb-1 flex items-center justify-between'>
          {name}
          {/* <HeadingProductBage className='group-hover:fill-current text-green' /> */}
        </div>
        <LabelDetailStatus analogDetail='2205-C-415 (BMW)' className='mb-2' />
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
        <CardField name='Применимость' isBorder className='uppercase space-x-2'>
          {applicability.map((item, idx) => {
            return (
              <span key={idx} className='uppercase'>
                {item}
              </span>
            );
          })}
        </CardField>
      </div>
    );
  }
);

HorizontalCardInfoBlock.displayName = 'HorizontalCardInfoBlock';
