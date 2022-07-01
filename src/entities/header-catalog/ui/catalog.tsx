import { useClickOutside } from '../../../shared/lib';
import { CatalogLink } from './catalog-link';
import { catalogList, ICatalogList } from '../lib/catalog-items';
import React from 'react';

type Props = {
  onCloseCatalogMenu: () => void;
};

export const Catalog = React.memo(({ onCloseCatalogMenu }: Props) => {
  const refCatalog = useClickOutside(onCloseCatalogMenu);

  const renderitem = (item: ICatalogList) => {
    const { id, catalogTitle, subCatalogList } = item;
    return (
      <CatalogLink key={item.id} subCatalogList={item.subCatalogList}>
        {item.catalogTitle}
      </CatalogLink>
    );
  };

  return (
    <div
      className='absolute border border-red-900 bg-gray-100 pt-8 pb-3 md:top-36 md:left-2'
      ref={refCatalog}
    >
      <ul className='w-72 flex flex-col'>{catalogList.map(renderitem)}</ul>
    </div>
  );
});

Catalog.displayName = 'Catalog';
