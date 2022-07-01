import { useRouter } from 'next/router';
import { DetailsSearch, SmartSearch } from '../../../widgets';
import { INavItem, navItems } from '../lib';
import { CatalogBtn } from './catalog-btn';
import { NavItem } from './nav-item';

type Props = {
  show: boolean;
  showCatalog: boolean;
  onToggleCatalogButton: () => void;
  onClickOutside: () => void;
};

export const Nav: React.FC<Props> = ({
  show,
  showCatalog,
  onToggleCatalogButton,
}) => {
  const router = useRouter();

  const renderItems = (item: INavItem, idx: number) => {
    const { name, path } = item;
    return (
      <NavItem
        key={idx}
        text={name}
        active={path === router.asPath}
        onClick={() => router.push(path)}
      />
    );
  };

  return (
    <div className='order-3 w-full bg-white md:block md:py-2'>
      <div
        className={`mx-auto flex max-w-[1220px] flex-col items-center px-2 py-4 md:flex-row md:px-4 md:py-0 ${
          show ? 'flex' : 'hidden md:flex'
        }`}
      >
        <CatalogBtn
          showCatalog={showCatalog}
          onToggleCatalogButton={onToggleCatalogButton}
        />
        <DetailsSearch
          placeholder='Поиск автозапчастей...'
          isMobile
          className='h-10 w-full border border-gray-100'
        />
        <SmartSearch isSelectCar className='md:hidden -mx-2' />
        <nav className='order-1 w-full'>
          <ul className='flex-wrap items-center px-4 text-xs md:flex lg:text-sm'>
            {navItems.map(renderItems)}
          </ul>
        </nav>
      </div>
    </div>
  );
};
