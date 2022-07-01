import { useState } from 'react';
import type { InferGetServerSidePropsType, NextPage, PreviewData } from 'next';
import { GetServerSideProps } from 'next';
import { FilterWrapper, PageWrapper, ReverseSearch } from '../../widgets';
import {
  PageHeading,
  Breadcumps,
  DisplayingFilters,
  PageLayout,
  filterData,
} from '../../entities';
import { ICategoryProps, IParams } from '../../shared/interfaces';
import { api } from '../../shared/api';
import { ActionsBar, Categories } from '../../features';

const Category: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  selected,
  selector,
  title,
  offerCount,
  breadcrumbs,
  selectorTitle,
  details,
  pagination,
}) => {
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
      <PageLayout>
        <Breadcumps breadcrumpsData={breadcrumbs} />
        <PageHeading
          title={title}
          className='py-5 sm:pt-10 sm:pb-8 md:text-3xl'
        />
        <ReverseSearch
          selector={selector}
          selected={selected}
          title={selectorTitle}
        />
        <ActionsBar
          isHorizontal={isHorizontal}
          onSetIsHorisontal={onSetIsHorisontal}
          onSetIsVertical={onSetIsVertical}
          onSetIsOpenFilter={onSetIsOpenFilter}
        >
          <div className='text-xs text-gray-300 sm:text-sm  md:pl-4'>
            {offerCount}
          </div>
        </ActionsBar>
        <FilterWrapper isOpenFilter={isOpenFilter} onClick={onSetIsOpenFilter}>
          <div className={`${isOpenFilter ? 'lg:basis-3/4' : 'basis-full'} w-full`}>
            {filterData.length > 0 && (
              <div className='pb-5'>
                <DisplayingFilters filterData={filterData} />
              </div>
            )}
            <Categories
              details={details}
              isHorizontal={isHorizontal}
              pagination={pagination}
            />
          </div>
        </FilterWrapper>
      </PageLayout>
    </PageWrapper>
  );
};

export const getServerSideProps: GetServerSideProps<
  ICategoryProps,
  IParams,
  PreviewData
> = async () => {
  try {
    const { data } = await api.get<ICategoryProps>('page/category', {
      params: {
        slug: '/',
      },
    });

    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

export default Category;
