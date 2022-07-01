import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ProductLabel } from '../../../entities';
import { ICategorySelect, ICategorySelected } from '../../../shared/interfaces';
import { IReverseSearchData } from '../lib/interfaces';
import { ReverseSearchBtn } from './reverse-search-btn';

/** Компонент обратного поиска. В верхней части отображаются лейблы товара. В нижней пункты для выбора категории и тд. */
export const ReverseSearch: React.FC<IReverseSearchData> = React.memo(
  ({ selector, selected, title }) => {
    const [showAll, setShowAll] = useState(false);
    const [filter, setFilter] = useState('');
    const router = useRouter();

    const onSetIsAllCategories = () => {
      setShowAll(!showAll);
    };

    const renderProductLabel = (
      { type, name, closeSlug }: ICategorySelected,
      idx: number
    ) => {
      return (
        <div key={idx}>
          <ProductLabel
            name={name}
            onClick={() => {
              router.push(closeSlug);
            }}
          />
        </div>
      );
    };

    /** Метод рендера компонента списка категорий. */
    const renderItem = (link: ICategorySelect) => {
      const { id, name, slug } = link;
      return (
        <Link href={slug} key={id}>
          <a className='mb-3 inline-block cursor-pointer pr-5 text-sm transition hover:text-green'>
            {name}
          </a>
        </Link>
      );
    };

    const filterSelector = () => {
      if (filter) {
        return selector.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        );
      }
      return selector;
    };

    const renderSelector = () => {
      if (!selector || !selector.length) {
        return null;
      }
      const items = showAll ? filterSelector() : filterSelector().slice(0, 10);
      return (
        <div className='pt-5 pb-2'>
          <ReverseSearchBtn
            categoryTitle={title}
            onClick={onSetIsAllCategories}
            isAllCategories={showAll}
          />
          {items.map(renderItem)}
        </div>
      );
    };

    return (
      <div className='border-t border-gray-100'>
        <div className={`flex flex-wrap gap-3 pt-5 sm:gap-5`}>
          {selected ? selected.map(renderProductLabel) : null}
        </div>
        <label className='text-gray-400'>
          Фильтр
          <input
            type='text'
            name='filter'
            className='mx-2 my-5 rounded-md border-gray-200 focus:border-green focus:ring-transparent md:mx-5'
            value={filter}
            onChange={({ target: { value } }) => setFilter(value)}
          />
        </label>

        {renderSelector()}
      </div>
    );
  }
);

ReverseSearch.displayName = 'ReverseSearch';
