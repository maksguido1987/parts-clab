import React, { useState } from 'react';
import { ITab, TabItem } from './tab-item';

interface IProps {
  /** Названия заголовков таб-бара с ID */
  tabs: ITab[];
  children?: React.ReactNode;
  className?: string;
  /** Флаг, к какой странице принадлежит таб-бар (разные стили) */
  page?: 'card' | 'shop' | 'order' | 'my-order';
}

export const TabBar: React.FC<IProps> = React.memo(
  ({ tabs, children, className, page }) => {
    const initialTab = tabs[0].label;
    const [active, setActive] = useState<string>(initialTab);

    const onSetActiveTab = (e: React.MouseEvent, label: string) => {
      e.stopPropagation();
      setActive(label);
    };

    const renderItem = (tab: ITab) => {
      const { label } = tab;
      return (
        <TabItem
          page={
            page === undefined
              ? 'card'
              : page === 'shop'
              ? 'shop'
              : page === 'my-order'
              ? 'my-order'
              : 'order'
          }
          label={label}
          active={active}
          key={label}
          onClick={(e) => onSetActiveTab(e, label)}
        />
      );
    };

    return (
      <div className={`${className ? className : ''}`}>
        <div
          className={`${
            page === 'card'
              ? 'border-b border-gray-100 flex space-x-5 mb-6 lg:mb-7'
              : page === 'order'
              ? 'sm:flex mb-2.5'
              : page === 'my-order'
              ? 'flex md:justify-end pb-5'
              : 'flex space-x-5 mb-6 lg:mb-7'
          } `}
        >
          {tabs.map((tab) => renderItem(tab))}
        </div>
        <div
          className={`${
            page !== 'order' && page !== 'my-order' ? 'sm:pl-2.5' : ''
          }`}
        >
          {React.Children.map(children, (child, idx) => {
            return tabs[idx].label === active ? child : null;
          })}
        </div>
      </div>
    );
  }
);

TabBar.displayName = 'TabBar';
