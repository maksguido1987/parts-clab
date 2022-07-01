import React, { useEffect, useState } from 'react';
import { Button, Input, PhoneInputWrapper } from '../../../entities';
import { AddressSuggestions, DaDataAddressSuggestion } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';
import { useInput } from '../../../shared/lib';
import getConfig from 'next/config';
import {
  useGetUserQuery,
  useSetUserAddressMutation,
  useSetUserDataMutation,
} from '../../../shared/store';

const { publicRuntimeConfig } = getConfig();
const { DA_DATA_KEY } = publicRuntimeConfig;

export const AccountInfo = () => {
  const [setUserData] = useSetUserDataMutation();
  const { data: user } = useGetUserQuery();
  const [setUserAddress] = useSetUserAddressMutation();
  const [isValidForm, setIsValidForm] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [addressValue, setAddressValue] = useState<DaDataAddressSuggestion>();

  const name = useInput('', {
    minLenght: 2,
    maxLenght: 30,
  });
  const email = useInput('', {
    validEmail: true,
    maxLenght: 40,
  });
  const lastAddress = useInput('', {
    isEmpty: true,
    minLenght: 2,
    maxLenght: 100,
  });
  const [disableForm, setDisableForm] = useState({
    isDisabledName: true,
    // isDisabledPhone: true,
    isDisabledEmail: true,
    isDisabledAdress: true,
  });

  const { isDisabledName, isDisabledEmail, isDisabledAdress } = disableForm;
  const isDisableFormSate = Object.values(disableForm).every(Boolean);

  const onSetDisabledForm = (value: boolean) => {
    setDisableForm({
      isDisabledName: value,
      // isDisabledPhone: value,
      isDisabledEmail: value,
      isDisabledAdress: value,
    });
  };

  const onCheckValidPhone = (value: boolean) => {
    setIsValidPhone(value);
  };

  useEffect(() => {
    const lastUserAddress = user?.address![user.address!.length - 1].value;

    name.setValue(user?.name!);
    email.setValue(user?.email!);
    setPhoneValue(user?.phone!);
    lastAddress.setValue(lastUserAddress!);

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.email, user?.name, user?.phone]);

  useEffect(() => {
    if (name.isValidInput && email.isValidInput) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [name.isValidInput, email.isValidInput]);

  return (
    <>
      <h3 className='mb-7 text-base font-semibold sm:text-lg lg:text-2xl'>
        Информация об аккаунте
      </h3>
      <form className='flex flex-col space-y-5'>
        <Input
          type='text'
          placeholder='Фамилия Имя и Отчество'
          {...name}
          value={name.value}
          onChange={name.onChange}
          onBlur={name.onBlur}
          disabled={isDisabledName}
        />
        <PhoneInputWrapper
          placeholder='Номер телефона'
          isDisabledPhone={true}
          onCheckValidPhone={onCheckValidPhone}
          phoneValue={phoneValue}
          setPhoneValue={setPhoneValue}
        />
        <Input
          type='email'
          placeholder='Электронная почта'
          {...email}
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlur}
          disabled={isDisabledEmail}
        />
        {isDisableFormSate ? (
          <>
            <Input
              type='text'
              placeholder=''
              {...lastAddress}
              value={lastAddress.value}
              onChange={lastAddress.onChange}
              onBlur={lastAddress.onBlur}
              disabled={true}
            />
            <Button
              name='Редактировать профиль'
              size='form-btn'
              onClick={() => onSetDisabledForm(false)}
              className='mx-auto w-72'
            />
          </>
        ) : (
          <>
            <AddressSuggestions
              token={DA_DATA_KEY}
              value={addressValue}
              onChange={setAddressValue}
              delay={500}
              minChars={3}
              inputProps={{
                disabled: isDisabledAdress,
                placeholder: 'Адрес',
              }}
            />
            <Button
              name='Сохранить изменения'
              size='form-btn'
              onClick={async () => {
                await setUserData({
                  name: name.value,
                  phone: phoneValue,
                  email: email.value,
                });
                if (addressValue) {
                  const {
                    country_iso_code,
                    area,
                    block,
                    city,
                    city_district,
                    country,
                    flat,
                    house,
                    geo_lat,
                    geo_lon,
                    postal_code,
                    region,
                    settlement,
                    street,
                  } = addressValue.data;
                  await setUserAddress({
                    ISOCode: country_iso_code,
                    area: area,
                    block: block,
                    city: city,
                    cityDistrict: city_district,
                    country: country,
                    flat: flat,
                    house: house,
                    id: 0,
                    lat: geo_lat,
                    lng: geo_lon,
                    postalCode: postal_code,
                    region: region,
                    settlement: settlement,
                    street: street,
                    value: addressValue.value,
                  });
                }
                onSetDisabledForm(true);
              }}
              className='mx-auto w-72'
              disabled={!isValidForm}
            />
          </>
        )}
      </form>
    </>
  );
};
