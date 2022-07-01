import getConfig from 'next/config';
import React, { useState } from 'react';
import { AddressSuggestions, DaDataAddressSuggestion } from 'react-dadata';
import { Button } from '../../../../entities';
import { ICityModalProps } from '../../lib';
import { ModalPortal } from '../modal-portal';

const { publicRuntimeConfig } = getConfig();
const { DA_DATA_KEY } = publicRuntimeConfig;

export const CityModal: React.FC<ICityModalProps> = React.memo(
  ({ isShow, onSetNewCity, setShowModal, currentCity }) => {
    const [city, setCity] = useState<DaDataAddressSuggestion>();
    const [isErrorCity, setIsErrorCity] = useState(false);

    /** Если в поле dadata корректный город, отправляем его родителю и сетаем в localStorage, иначе выводим ошибку */
    const onSetCityInLocalStorage = () => {
      if (city?.data.city) {
        setIsErrorCity(false);
        localStorage.setItem('userCity', city?.data.city);
        onSetNewCity(city?.data.city);
        setCity(undefined);
        setShowModal();
      } else {
        setIsErrorCity(true);
      }
    };

    return (
      <ModalPortal show={isShow} onClose={setShowModal} title='Выбор города'>
        <div className='mb-2'>Вашь город {currentCity}?</div>
        <div className='mb-4 text-xs'>
          Мы автоматически определили город для доставки автозапчастей. Если мы
          ошиблись, укажите верный.
        </div>
        <div className='relative sm:flex'>
          {isErrorCity && (
            <small className='absolute top-full left-0 pl-1 text-xs text-red-500'>
              Вы не верно ввели город
            </small>
          )}
          <div className='mb-2 basis-3/4 sm:mr-2 sm:mb-0'>
            <AddressSuggestions
              token={DA_DATA_KEY}
              inputProps={{ placeholder: 'Поиск только городов' }}
              value={city}
              onChange={setCity}
              delay={300}
              minChars={3}
              filterFromBound='city'
              filterToBound='city'
              selectOnBlur={true}
            />
          </div>
          <Button
            name='Сохранить'
            onClick={onSetCityInLocalStorage}
            size='form-btn'
            className='w-full basis-1/4'
          />
        </div>
      </ModalPortal>
    );
  }
);

CityModal.displayName = 'CityModal';
