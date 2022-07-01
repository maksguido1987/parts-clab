import Image from 'next/image';
import { TopBarLink, TopBarBlock, Dropdown, Spinner } from '../../../entities';
import { useClickOutside, useToggle } from '../../../shared/lib';
import personalAccountIcon from '../../../../public/img/account/personal-account.svg';
import {
  store,
  useAuthLogoutMutation,
  useGetUserQuery,
  userAPI,
} from '../../../shared/store';
import { useRouter } from 'next/router';

type Props = {
  city: string;
  onShowCity: () => void;
  setShowAuthModal: () => void;
};

export const TopBarNav: React.FC<Props> = ({
  city,
  onShowCity,
  setShowAuthModal,
}) => {
  const [openDropdown, setOpenDropdown] = useToggle();
  const { data: user, isLoading } = useGetUserQuery();
  const [authLogout] = useAuthLogoutMutation();
  const router = useRouter();

  const onSetOpenDropdown = () => {
    openDropdown && setOpenDropdown();
  };

  const onLogout = async () => {
    try {
      await authLogout('').unwrap();
      store.dispatch(userAPI.util.resetApiState());
      router.push('/');
    } catch (error) {
      console.log('header error', error);
    } finally {
      onSetOpenDropdown();
    }
  };

  const accountLabelRef = useClickOutside(onSetOpenDropdown);

  return (
    <nav className='mx-auto flex h-9 max-h-full items-center md:px-4 px-2 md:max-w-[1220px]'>
      <ul className='flex grow items-center justify-between text-sm'>
        {!isLoading ? (
          <TopBarLink
            text={city}
            className='bg-top-city-header bg-left bg-no-repeat pl-5 hover:text-gray-500 md:min-w-[160px] lg:min-w-[220px]'
            onClick={onShowCity}
          />
        ) : (
          <Spinner  size={20} className='md:min-w-[160px] lg:min-w-[220px]' />
        )}
        <TopBarBlock className='hidden hover:text-gray-500 md:flex' />
        {user ? (
          <div className='ml-auto'>
            <Dropdown ref={accountLabelRef} isOpen={openDropdown}>
              <div
                className='flex h-6 w-6 cursor-pointer items-center justify-center rounded-full duration-300 hover:scale-125'
                onClick={setOpenDropdown}
              >
                <Image
                  src={personalAccountIcon}
                  alt='user'
                  width={16}
                  height={16}
                />
              </div>
              <div className='px-5'>
                <div
                  className='mb-1 cursor-pointer transition hover:text-gray-500'
                  onClick={() => {
                    router.push('/account');
                    onSetOpenDropdown();
                  }}
                >
                  Профиль
                </div>
                <div
                  className='cursor-pointer transition hover:text-gray-500'
                  onClick={onLogout}
                >
                  Выйти
                </div>
              </div>
            </Dropdown>
          </div>
        ) : (
          <TopBarLink
            text='Войти'
            isLast
            className='last:ml-auto hover:text-gray-500'
            onClick={setShowAuthModal}
          />
        )}
      </ul>
    </nav>
  );
};
