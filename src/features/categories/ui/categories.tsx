import { useEffect, useState } from 'react';
import { api } from '../../../shared/api';
import {
  ICategoryDetails,
  ICategoryPagination,
} from '../../../shared/interfaces';
import { CategoryCard } from '../../card';
import { RequestSmall } from '../../selection-request';
import { CategoryPagination } from './category-pagination';

interface IProps {
  /** Массив данных для отображения карточек товара */
  details: ICategoryDetails[];
  pagination: ICategoryPagination;
  /** Флаг отображения положения карточек товара и их контейнера */
  isHorizontal: boolean;
  /** При true карточки магазина, иначе карточки категории */
  isShop?: boolean;
}

export const Categories: React.FC<IProps> = ({
  details,
  pagination,
  isHorizontal,
  isShop = false,
}) => {
  const [categoryDetails, setCategoryDetails] = useState<ICategoryDetails[]>(
    []
  );
  const [categoryPagination, setCategoryPagination] =
    useState<ICategoryPagination>({
      currentPage: 0,
      pageCount: 0,
      limit: 0,
      nextURL: '',
    });
  const [nextURL, setNextURL] = useState('');
  const [disabledBtn, setDisabledBtn] = useState(false);

  /** Подгружаем 30 деталей и добавляем в стейт */
  const getCategoryDetails = async () => {
    setDisabledBtn(true);
    try {
      const response = await api.get(nextURL);
      const data = await response.data;
      setCategoryDetails([...categoryDetails, ...data.details]);
      setCategoryPagination(data.pagination);
      setNextURL(data.pagination.nextURL);
      setDisabledBtn(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCategoryDetails(details);
    setCategoryPagination(pagination);
    setNextURL(pagination.nextURL);
  }, [details, pagination]);

  const renderlItem = (item: ICategoryDetails, idx: number) => {
    return (
      <CategoryCard
        isShop={isShop ? true : false}
        isHorizontal={isHorizontal}
        data={item}
        key={idx}
      />
    );
  };

  return (
    <>
      <div
        className={`${
          isHorizontal
            ? 'w-full'
            : 'grid grid-cols-1 justify-items-stretch gap-y-2.5 gap-x-3 sm:grid-cols-2 md:grid-cols-3'
        }`}
      >
        {categoryDetails?.map(renderlItem)}
        {/* {!isHorizontal && (
          <div className='hidden sm:block'>
            <RequestSmall />
          </div>
        )} */}
      </div>
      <CategoryPagination
        pagination={categoryPagination}
        disabledBtn={disabledBtn}
        getCategoryDetails={getCategoryDetails}
      />
    </>
  );
};
