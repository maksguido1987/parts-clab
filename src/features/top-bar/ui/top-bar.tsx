import React, { useEffect, useState } from 'react';
import { useToggle } from '../../../shared/lib';
import { useGetUserIPQuery } from '../../../shared/store';
import { CityModal, RegisterModal } from '../../../widgets';
import { getUserCityByIp } from '../lib';
import { TopBarNav } from './top-bar-nav';

interface IProps {
  show: boolean;
}

export const TopBar: React.FC<IProps> = ({ show }) => {
  const [city, setCity] = useState<string>('Москва');
  const { data: ip } = useGetUserIPQuery('');
  const [showCityModal, setShowCityModal] = useToggle();
  const [showAuthModal, setShowAuthModal] = useToggle();

  const onSetNewCity = (value: string) => {
    setCity(value);
  };

  /** Устанавливаем город и передаем в компонент, либо из LocalStorage, либо определяем по ip. Если не получилось определить - Москва */
  useEffect(() => {
    const ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    const cityFromLocalStorage = localStorage.getItem('userCity');

    if (cityFromLocalStorage) {
      setCity(cityFromLocalStorage);
    } else if (ip?.ip && ip?.ip.match(ipPattern)) {
      getUserCityByIp(ip?.ip).then((c) => setCity(c.location.data.city));
    }
    return () => {};
  }, [ip, city]);

  return (
    <div
      className={`order-2 bg-white md:order-none md:block md:bg-gray-100 ${
        show ? 'block' : 'hidden'
      }`}
    >
      <TopBarNav
        city={city!}
        onShowCity={setShowCityModal}
        setShowAuthModal={setShowAuthModal}
      />
      <CityModal
        isShow={showCityModal}
        onSetNewCity={onSetNewCity}
        setShowModal={setShowCityModal}
        currentCity={city}
      />
      <RegisterModal isShow={showAuthModal} setShowModal={setShowAuthModal} />
    </div>
  );
};
