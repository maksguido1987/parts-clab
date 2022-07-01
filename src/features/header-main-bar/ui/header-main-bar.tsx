import { Badge, Burger, Logo } from '../../../entities';
import { DetailsSearch, SelectCar } from '../../../widgets';

interface IProps {
  show: boolean;
  onOpenSubMenu: () => void;
}

export const HeaderMainBar: React.FC<IProps> = ({ show, onOpenSubMenu }) => {
  return (
    <div className='min-w-min border-b border-gray-100 bg-white shadow-lg md:shadow-none'>
      <div className='mx-auto flex h-14 max-w-[1220px] items-center justify-between px-2 md:h-16 md:px-4'>
        <div className='pr-3 xl:w-48'>
          <Logo />
        </div>
        <div className='flex md:grow'>
          <div className='flex items-center md:grow'>
            <DetailsSearch
              placeholder='Поиск автозапчастей...'
              className='border-l border-gray-100'
            />
            <SelectCar />
            <Badge type='favorites' value={0} />
            <Badge type='cart' value={12} />
          </div>
          <div className='flex cursor-pointer items-center md:hidden'>
            <Burger show={show} onOpenSubMenu={onOpenSubMenu} />
          </div>
        </div>
      </div>
    </div>
  );
};
