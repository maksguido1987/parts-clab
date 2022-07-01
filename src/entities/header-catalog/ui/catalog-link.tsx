import Link from 'next/link';
import React, { ReactNode, useState } from 'react';

interface IProps {
  subCatalogList: string[];
  children: ReactNode;
}

export const CatalogLink: React.FC<IProps> = ({
  subCatalogList,
  children,
}) => {
  const [isOpenSubList, setIsOpenSubList] = useState(false);

  return (
    <>
      <li
        className='flex cursor-pointer pl-5 py-1 max-w-7xl transition hover:bg-white'
        onMouseOver={() => setIsOpenSubList(true)}
        onMouseLeave={() => setIsOpenSubList(false)}
      >
        {children} 
        {isOpenSubList ? '>' : null}
        {isOpenSubList ? (
          <ul
            className={`absolute left-full top-0 flex max-w-full p-2 bg-white border border-green-light`}
          >
            {subCatalogList.map((subItem, idx) => {
              return (
                <li
                  className='w-72 text-sm p-1 px-1 text-gray-400 hover:bg-red-300'
                  key={String(new Date().getTime() + idx)}
                >
                  <Link href='/'>
                    <a>{subItem}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </li>
    </>
  );
};
