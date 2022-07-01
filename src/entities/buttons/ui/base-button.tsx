import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface IProps {
  /** Отображаемое наименование кнопки */
  name: string;
  /** Всплывающая подсказка */
  title?: string;
  /** Дополнительные стили кнопки */
  className?: string;
  /** Событие нажатия кнопки */
  onClick: (e: React.MouseEvent) => void;
  /** Флаг размера кнопки */
  size?:
    | 'small-btn'
    | 'middle-btn'
    | 'search-input-btn'
    | 'selection-request-btn'
    | 'form-btn'
    | 'actions-bar-btn';
  /** Флаг наличия иконки в кнопке */
  isImage?: boolean;
  /** Путь к картинке для кнопки */
  src?: string;
  disabled?: boolean;
}

export const BaseButton: React.FC<IProps> = ({
  name,
  title,
  onClick,
  className,
  isImage,
  src,
  size,
  disabled = false,
}) => {


  let padding = '';
  let rounded = '';
  switch (size) {
    // TODO: кнопка только для инпута, больше нигде не используется, стили никуда не подходят (много кнопок с радиусом 10, но у них на широком экране меньший размер)
    case 'search-input-btn':
      padding = 'md:p-5 p-4';
      rounded = 'rounded-[10px]';
      break;
    // TODO: тоже используется только в паре компонентов, отличается от default сильно меньшим радиусом на малых разрешениях
    case 'selection-request-btn':
      padding = 'py-2.5 sm:py-3.5 px-2';
      rounded = 'rounded-md sm:rounded-[10px]';
      break;
    // TODO: серые кнопки в actions-bar
    case 'actions-bar-btn':
      padding = 'sm:py-2.5 py-1.5';
      rounded = 'rounded-md';
      break;
    // TODO: кнопка используется 'В корзину' 'Активные заказы' и еще в паре мест, на малых разрешениях становится меньше padding и радиус
    case 'middle-btn':
      padding = 'md:p-3.5 p-3';
      rounded = 'md:rounded-lg rounded-md';
      break;
    // TODO: кнопка используется в карточках товара, показать ещё, на малых разрешениях становится меньше padding, радиус всегда 6рх
    case 'small-btn':
      padding = 'py-2.5 px-2';
      rounded = 'rounded-md';
      break;
    // TODO: кнопка используется в формах регистрации/авторизациии, форма заказа
    case 'form-btn':
      padding = 'px-5 h-12';
      rounded = 'rounded-[10px]';
      break;
    // TODO: базовая кнопка, используется во всех формах и модалках, сегда большой радиус, никогда не меняются padding
    default:
      padding = 'p-3.5';
      rounded = 'rounded-[10px]';
  }

  return (
    <button
      className={`${className ? className : ''} ${
        disabled ? 'opacity-70' : ''
      } ${padding} ${rounded} flex min-w-full cursor-pointer items-center justify-center outline-none transition disabled:cursor-default`}
      title={title}
      onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        onClick(e);
      }}
      disabled={disabled}
    >
      {name}
      {isImage && (
        <div className='relative ml-2 h-3 w-3 sm:h-4 sm:w-4'>
          <Image src={src!} layout='fill' objectFit='contain' alt='btn-image' />
        </div>
      )}
    </button>
  );
};
