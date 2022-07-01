import React, { useEffect, useState } from 'react';
import { Button, Spinner } from '../../../entities';
import eyeBtnImage from '../../../../public/img/buttons-img/eye.svg';
import { ICategoryPagination } from '../../../shared/interfaces';

interface IProps {
  pagination: ICategoryPagination;
  disabledBtn: boolean;
  getCategoryDetails: () => void;
}

export const CategoryPagination: React.FC<IProps> = ({
  pagination,
  disabledBtn,
  getCategoryDetails,
}) => {
  const { currentPage: current, pageCount: count } = pagination;
  const [currentPage, setCurrentPage] = useState(current);
  const [pageCount, setPageCount] = useState(count);

  const lastPage = currentPage == pageCount;

  useEffect(() => {
    setCurrentPage(current);
    setPageCount((prevState) => (count !== 0 ? count : prevState));
  }, [count, current]);

  const loadingPage = disabledBtn ? (
    <Spinner size={14} className='inline' />
  ) : (
    currentPage
  );

  return (
    <div className='my-12 items-center justify-center sm:flex'>
      <Button
        size='small-btn'
        className='mr-5 mb-5 w-full text-sm sm:mb-0 sm:w-max'
        name='Показать ещё'
        isImage
        src={eyeBtnImage}
        onClick={getCategoryDetails}
        disabled={disabledBtn || lastPage}
      />
      <div className='text-center text-sm text-gray-400 sm:text-right'>
        Показано {loadingPage} из {pageCount}
      </div>
    </div>
  );
};
