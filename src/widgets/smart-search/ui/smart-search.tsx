import React, { useEffect, useState } from 'react';
import { SmartSearchTitle } from './smart-search-title';
import { SmartSearchInput } from './smart-search-input';
import { SearchSelected } from './search-selected';
import { ISearchSelectValue } from '../interfaces';
import { ESuggestionKeys } from '..';
import { useAppSelector } from '../../../shared/store';

interface IProps {
  /** Флаг определяет, что поиск только автомобилей */
  isSelectCar?: boolean;
  className?: string;
}

export const SmartSearch: React.FC<IProps> = ({ isSelectCar, className }) => {
  const [brand, setBrand] = useState<ISearchSelectValue | undefined>(undefined);
  const [model, setModel] = useState<ISearchSelectValue | undefined>(undefined);
  const [generation, setGeneration] = useState<ISearchSelectValue | undefined>(
    undefined
  );
  const [modification, setModification] = useState<
    ISearchSelectValue | undefined
  >(undefined);
  const [category, setCategory] = useState<ISearchSelectValue | undefined>(
    undefined
  );
  const [vin, setVin] = useState<ISearchSelectValue | undefined>(undefined);
  const { loading } = useAppSelector((state) => state.suggestions);

  /** Устанавливаем подсказки в состояние, если они есть в localStorage */
  useEffect(() => {
    const brandFromLocalStorage = JSON.parse(
      localStorage.getItem('userCarBrand')!
    );
    const modelFromLocalStorage = JSON.parse(
      localStorage.getItem('userCarModel')!
    );
    const generationFromLocalStorage = JSON.parse(
      localStorage.getItem('userCarGeneration')!
    );
    const modificationFromLocalStorage = JSON.parse(
      localStorage.getItem('userCarModification')!
    );
    brandFromLocalStorage && setBrand(brandFromLocalStorage);
    modelFromLocalStorage && setModel(modelFromLocalStorage);
    generationFromLocalStorage && setGeneration(generationFromLocalStorage);
    modificationFromLocalStorage &&
      setModification(modificationFromLocalStorage);
  }, []);

  const setHandler = (type: ESuggestionKeys, value: ISearchSelectValue) => {
    switch (type) {
      case ESuggestionKeys.brand:
        if (isSelectCar) {
          localStorage.setItem('userCarBrand', JSON.stringify(value));
        }
        setBrand(value);
        break;
      case ESuggestionKeys.model:
        if (isSelectCar) {
          localStorage.setItem('userCarModel', JSON.stringify(value));
        }
        setModel(value);
        break;
      case ESuggestionKeys.generation:
        if (isSelectCar) {
          localStorage.setItem('userCarGeneration', JSON.stringify(value));
        }
        setGeneration(value);
        break;
      case ESuggestionKeys.modification:
        if (isSelectCar) {
          localStorage.setItem('userCarModification', JSON.stringify(value));
        }
        setModification(value);
        break;
      case ESuggestionKeys.category:
        setCategory(value);
        break;
      case ESuggestionKeys.vin:
        setVin(value);
        break;
    }
  };

  /** Удаляет выбранную подсказку и состояние категории. Если это выбор авто, чистит localStorage */
  const deleteHandler = (type: ESuggestionKeys) => {
    switch (type) {
      case ESuggestionKeys.brand:
        setBrand(undefined);
        setModel(undefined);
        setGeneration(undefined);
        setModification(undefined);
        if (isSelectCar) {
          localStorage.removeItem('userCarBrand');
          localStorage.removeItem('userCarModel');
          localStorage.removeItem('userCarGeneration');
          localStorage.removeItem('userCarModification');
          setBrand(undefined);
          setModel(undefined);
          setGeneration(undefined);
          setModification(undefined);
        }
        break;
      case ESuggestionKeys.model:
        setModel(undefined);
        setGeneration(undefined);
        setModification(undefined);
        if (isSelectCar) {
          localStorage.removeItem('userCarModel');
          localStorage.removeItem('userCarGeneration');
          localStorage.removeItem('userCarModification');
          setModel(undefined);
          setGeneration(undefined);
          setModification(undefined);
        }
        break;
      case ESuggestionKeys.generation:
        setGeneration(undefined);
        setModification(undefined);
        if (isSelectCar) {
          localStorage.removeItem('userCarGeneration');
          localStorage.removeItem('userCarModification');
          setGeneration(undefined);
          setModification(undefined);
        }
        break;
      case ESuggestionKeys.modification:
        setModification(undefined);
        if (isSelectCar) {
          localStorage.removeItem('userCarModification');
          setModification(undefined);
        }
        break;
      case ESuggestionKeys.category:
        setCategory(undefined);
        break;
      case ESuggestionKeys.vin:
        setVin(undefined);
        break;
    }
  };

  return (
    <div
      className={`${className ? className : ''} ${
        isSelectCar
          ? 'right-0 z-30 min-w-full md:absolute md:min-w-[500px] md:bg-white md:shadow-searchInput'
          : 'bg-gray-100 pt-5 md:pt-10'
      }`}
    >
      <div className={`${isSelectCar ? 'p-4' : 'm-auto px-2 md:max-w-[1220px] md:px-4'}`}>
        {!isSelectCar && <SmartSearchTitle />}
        <div className={`${isSelectCar ? '' : 'py-5'}`}>
          <SearchSelected
            isSelectCar={isSelectCar}
            selected={{ brand, model, generation, modification, category, vin }}
            onDelete={deleteHandler}
          />
          <SmartSearchInput
            isSelectCar={isSelectCar}
            selected={{ brand, model, generation, modification, category, vin }}
            onSetValue={setHandler}
            placeholder={
              loading
                ? 'Подождите, пока мы настраиваем поиск ...'
                : isSelectCar
                ? 'Выберите автомобиль...'
                : 'Для поиска начните вводить'
            }
            isDisabled={loading}
          />
        </div>
      </div>
    </div>
  );
};
