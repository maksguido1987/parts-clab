import React from 'react';
import { useState } from 'react';
import { Catalog } from '../../../entities';
import { TopBar, HeaderMainBar, Nav } from '../../../features';
import { useClickOutside } from '../../../shared/lib';
import { useLoadSuggestions } from '../../smart-search';

export const Header: React.FC = React.memo(() => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCatalog, setShowCatalog] = useState(false);

  const outsideClickHandler = () => {
    showMenu && setShowMenu(false);
  };
  const headerRef = useClickOutside(outsideClickHandler);

  return (
    <>
      <header className='fixed top-0 z-30 w-full flex flex-col' ref={headerRef}>
        <TopBar show={showMenu} />
        <HeaderMainBar show={showMenu} onOpenSubMenu={() => setShowMenu(!showMenu)} />
        <Nav
          show={showMenu}
          showCatalog={showCatalog}
          onToggleCatalogButton={() => setShowCatalog(!showCatalog)}
          onClickOutside={outsideClickHandler}
        />
      </header>

      {showCatalog && false /* Отключил каталог */ ? (
        <div className='relative z-30 max-w-[1220px] mx-auto pt-28'>
          <Catalog onCloseCatalogMenu={() => setShowCatalog(false)} />
        </div>
      ) : null}
    </>
  );
});

Header.displayName = 'Header';
