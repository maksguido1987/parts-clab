import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
  PreviewData,
} from 'next';
import { useState } from 'react';
import {
  Breadcumps,
  DisplayingFilters,
  filterData,
  PageHeading,
  PageLayout,
} from '../../entities';
import { ActionsBar, Categories } from '../../features';
import { api } from '../../shared/api';
import { IParams, ICategoryProps } from '../../shared/interfaces';
import { FilterWrapper, PageWrapper, ReverseSearch } from '../../widgets';

const CategorySlug: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({
  breadcrumbs,
  selected,
  selector,
  title,
  offerCount,
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
          <div className={`${isOpenFilter ? 'lg:basis-3/4' : 'lg:basis-full'} w-full`}>
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
> = async (context) => {
  let slug = '/';
  if (context.params) {
    slug += context.params.slug.join('/');
  }

  try {
    const { data } = await api.get<ICategoryProps>('page/category', {
      params: { slug },
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

export default CategorySlug;
