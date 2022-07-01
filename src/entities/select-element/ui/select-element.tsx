import React from 'react';
import { useToggle } from '../../../shared/lib/hooks/use-toggle';
import { AccardeonArrow } from '../../icons';

interface IProps {
  /** Заголовок селекта */
  title: string;
  /** Встраиваемый контент */
  children: React.ReactNode;
  /** Стили заголовка */
  className?: string;
  /** Размеры иконки */
  widthIcon?: number;
  heightIcon?: number;
}

export const SelectElement: React.FC<IProps> = ({
  title,
  children,
  className,
  widthIcon,
  heightIcon
}) => {
  const [open, setOpen] = useToggle();

  return (
    <div className='cursor-pointer' onClick={setOpen}>
      <div className='flex justify-between'>
        <h4
          className={`${className ? className : ''} ${
            open ? 'text-green' : ''
          } transition`}
        >
          {title}
        </h4>
        <AccardeonArrow
          width={widthIcon}
          height={heightIcon}
          color={open ? '#5DC563' : '#000000'}
          className={`${
            open ? 'rotate-0 fill-current text-green' : ''
          } -rotate-90 transition`}
        />
      </div>
      {open && children}
    </div>
  );
};
