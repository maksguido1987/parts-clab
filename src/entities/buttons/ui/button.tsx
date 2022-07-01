import React from 'react';
import { BaseButton } from './base-button';

interface IProps {
  /** Стили контейнера обертки и самой кнопки */
  className?: string;
  /** Флаг кнопки с одноименным фоном */
  color?: 'white' | 'purple' | 'gray';
  /** Отображаемое наименование кнопки */
  name: string;
  /** Событие нажатия кнопки */
  onClick: (e: React.MouseEvent) => void;
  /** Флаг размера кнопки */
  size?:
    | 'small-btn'
    | 'middle-btn'
    | 'search-input-btn'
    | 'form-btn'
    | 'selection-request-btn'
    | 'actions-bar-btn';
  /** Флаг наличия иконки в кнопке */
  isImage?: boolean;
  /** Флаг иконки, если передано, то стрелка, иначе глаз */
  src?: string;
  /** Alt атрибут для иконки */
  alt?: string;
  disabled?: boolean;
}

/** Кнопка для всего проекта */
export const Button: React.FC<IProps> = React.memo(
  ({ className, color, ...props }) => {
    const renderButton = () => {
      switch (color) {
        case 'white':
          return (
            <BaseButton
              className='
              border-green 
              text-green 
              hover:border-green-hover 
              focus:hover:text-green-hover 
              border 
              bg-white'
              {...props}
            />
          );
        case 'gray':
          return (
            <BaseButton
              className='
              bg-gray-100 
              text-[10px] 
              hover:bg-gray-200 
              sm:text-sm'
              {...props}
            />
          );
        case 'purple':
          return (
            <BaseButton
              className='
              bg-blue 
              hover:bg-blue-light 
              focus:bg-blue-light
              text-white
              disabled:bg-gray-400'
              {...props}
            />
          );
        default:
          return (
            <BaseButton
              className={`
              border-green 
              bg-green 
              hover:border-green-hover hover:bg-green-hover 
              focus:border-green-hover 
              focus:bg-green-hover
              border 
              text-white 
              disabled:border-gray-400 
              disabled:bg-gray-400`}
              {...props}
            />
          );
      }
    };

    return (
      <div className={className ? className : 'max-w-max'}>
        {renderButton()}
      </div>
    );
  }
);

Button.displayName = 'Button';
