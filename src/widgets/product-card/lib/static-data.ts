import { IFeedbackProps, ITab } from '../../../entities';
import { IPriceItemProps } from '../ui';

export const tabLabels: ITab[] = [
  {
    label: 'Параметры',
  },
  {
    label: 'Применимость',
  },
  {
    label: 'Доставка и оплата',
  },
  {
    label: 'Отзывы о товаре',
  },
];

export const feedbacks: IFeedbackProps[] = [
  {
    name: 'Комлев Владимир Викторович',
    feedback: 'Все норм пришло, упаковка не пострадала,запчасти в порядке !',
    date: 1642757436170,
    rating: 100,
  },
  {
    name: '',
    feedback: 'Мне очень понравилось!',
    date: 1642757461167,
    rating: 85,
  },
];

export const prices: IPriceItemProps[] = [
  {
    seller: 'магазин на Красносельской',
    price: 184,
  },
  {
    seller: 'AutoParts',
    price: 193,
  },
  {
    seller: 'магазин на Красносельской',
    price: 224,
  },
  {
    seller: 'Брусника',
    price: 189,
  },
];
