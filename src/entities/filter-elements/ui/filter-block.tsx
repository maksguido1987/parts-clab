import React, { ReactNode } from 'react';
import { useToggle } from '../../../shared/lib';
import { AccardeonArrow } from '../../icons';

interface IProps {
  /** Дочерние элементы блока фильтров */
  children: ReactNode;
  /** Заголовок раздела */
  name: string;
  /** Определяет, закрыт или открыт блок при первоначальной загрузке */
  openStatus: boolean;
}

export const FilterBlock: React.FC<IProps> = React.memo(({
  children,
  name,
  openStatus,
}) => {
  const [open, setOpen] = useToggle(openStatus);

  return (
    <div className='transition group w-full pb-2 mb-2'>
      <div
        className='flex items-center justify-between cursor-pointer text-sm font-bold pb-2 group-hover:text-gray-600'
        onClick={setOpen}
      >
        {name}:
        <div className={`${open ? 'rotate-0' : '-rotate-90'} transition flex`}>
          <AccardeonArrow color='black' />
        </div>
      </div>
      {open && <div className=''>{children}</div>}
    </div>
  );
});

FilterBlock.displayName = 'FilterBlock';
