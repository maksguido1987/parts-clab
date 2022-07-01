import { NextPage } from 'next';
import React, { useState } from 'react';
import {
  DisplayingFilters,
  filterData,
  HeadShop,
  PageLayout,
  SellerInfo,
} from '../../entities';
import { ActionsBar, Categories, categoryData } from '../../features';
import { FilterWrapper, PageWrapper, SmartSearch } from '../../widgets';

const Shop: NextPage = () => {
  /** Состояние отображения блока фильтров на малом разрешении */
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  /** Состояние отображения карточек товара (плитка либо строка) */
  const [isHorizontal, setIsHorizontal] = useState(false);

  /** Функция изменения состояния блока фильтров */
  const onSetIsOpenFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  /** Функция изменения состояния отображения карточек на горизонтальное отображение */
  const onSetIsHorisontal = (value: boolean) => {
    setIsHorizontal(value);
  };
  /** Функция изменения состояния отображения карточек на вертикальное отображение */
  const onSetIsVertical = (value: boolean) => {
    setIsHorizontal(value);
  };

  return (
    <PageWrapper>
      <HeadShop />
      <SellerInfo />
      <SmartSearch />
      <PageLayout>
        <ActionsBar
          isHorizontal={isHorizontal}
          onSetIsHorisontal={onSetIsHorisontal}
          onSetIsVertical={onSetIsVertical}
          onSetIsOpenFilter={onSetIsOpenFilter}
        >
          <div className='text-sm sm:text-lg font-semibold max-w-[220px] md:max-w-full'>
            Предложения от магазин на Hагорной
          </div>
        </ActionsBar>
        <FilterWrapper isOpenFilter={isOpenFilter} onClick={onSetIsOpenFilter}>
          <div className='lg:basis-3/4 basis-full'>
            {filterData.length > 0 && (
              <div className='pb-5'>
                <DisplayingFilters filterData={filterData} />
              </div>
            )}
            {/* <Categories
              isShop
              categoryData={categoryData}
              isHorizontal={isHorizontal}
            /> */}
          </div>
        </FilterWrapper>
      </PageLayout>
    </PageWrapper>
  );
};

export default Shop;
