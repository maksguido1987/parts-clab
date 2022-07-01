import { useRouter } from 'next/router';
import { Burger } from '../../../entities';

type Props = {
  /** Булеан флаг, true - каталог открыт, false - закрыт */
  showCatalog: boolean;
  /** Функция переключения состояния отображения каталога */
  onToggleCatalogButton: () => void;
};

export const CatalogBtn = ({ showCatalog, onToggleCatalogButton }: Props) => {
  const router = useRouter()

  return (
    <div
      className='bg-green cursor-pointer rounded flex order-2 md:order-1 items-center pr-3 pl-1 text-white uppercase transition hover:bg-green-dark'
      onClick={() => router.push('/category')}
    >
      <Burger
        onOpenSubMenu={onToggleCatalogButton}
        isColor
        clickWrapper
        show={showCatalog}
      />
      Каталог
    </div>
  );
};
