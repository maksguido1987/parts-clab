import React, { useEffect, useState } from 'react';
import { ESuggestionKeys, ISuggestionItems } from '../store';
import { Button } from '../../../entities';
import { Helper } from './helper';
import { Suggestions } from './suggestions';
import { EToastType, showNotice, useClickOutside } from '../../../shared/lib';
import { useRouter } from 'next/router';
import { ISearchSelected, ISearchSelectValue } from '../interfaces';
import { useAppSelector } from '../../../shared/store';
import { useSuggestions } from '../lib/use-sugestions';

interface IProps {
  /** Подсказка внутри input */
  placeholder: string;
  /** Флаг не активности строки ввода текста */
  isDisabled?: boolean;
  /** Флаг поиска по машине, в противном случае поиск по детали */
  isCarSearch?: boolean;
  /** Выбранные параметры */
  selected: ISearchSelected;
  /** Метод выбора параметра */
  onSetValue: (type: ESuggestionKeys, value: ISearchSelectValue) => void;
  /** Флаг определяет, что поиск только афтомобилей */
  isSelectCar?: boolean;
}

export const SmartSearchInput: React.FC<IProps> = ({
  placeholder,
  selected,
  onSetValue,
  isCarSearch = true,
  isDisabled = false,
  isSelectCar,
}) => {
  const [value, setValue] = useState('');
  /** Все подсказки из store */
  const baseSuggestions = useAppSelector((state) => state.suggestions);
  const [openSuggestion, setOpenSuggestion] = useState(false);
  const smartSearchRef = useClickOutside(() => setOpenSuggestion(false));
  const router = useRouter();

  const suggestions = useSuggestions(selected, value);

  const changeHandler = (value: string) => {
    setValue(value);
  };

  /** Переход на страницу обратного поиска, при полном выборе */
  useEffect(() => {
    const { brand, model, generation, modification, category, vin } = selected;
    if (vin && category) {
      router.push(`/category/${category.slug}/${vin.slug}`);
    }
    if (brand && model && generation && modification && category) {
      const carUrl = [brand, model, generation, modification]
        .map((item) => item.slug)
        .join('_');
      router.push(`/category/${category.slug}/${carUrl}`);
    }
    return () => {};
  }, [selected, router]);

  const buttonClickHandler = () => {
    const { vin, ...other } = selected;
    if (vin) {
    } else if (Object.values(other).filter(Boolean).length) {
      const { brand, model, generation, modification, category } = other;
      const categoryUrl = category ? category.slug : '';
      const carUrl = [brand, model, generation, modification]
        .filter(Boolean)
        .map((item) => (item ? item.slug : ''))
        .join('_');
      const url = `/${['category', categoryUrl, carUrl]
        .filter(Boolean)
        .join('/')}`;
      router.push(url);
    } else {
      showNotice(EToastType.warn, 'Что-бы что-то найти, нужно что-то выбрать!');
    }
  };

  const keyDownHandler = (key: string) => {
    if (key === 'Enter') {
      buttonClickHandler();
    }
  };

  const suggestionSelectHandler = (
    type: ESuggestionKeys,
    item: ISuggestionItems
  ) => {
    const { id, slug, conditions } = item;
    if (type === ESuggestionKeys.detail) {
      alert(JSON.stringify(item));
    } else if (!selected.brand && type === ESuggestionKeys.model) {
      const [brandName, modelName] = conditions[0]
        .split('-')
        .map((item) => item.trim());
      const brandItem = baseSuggestions.brand.find(
        ({ id }) => id === item.parentId
      );
      if (brandItem) {
        onSetValue(ESuggestionKeys.brand, {
          id: brandItem.id,
          slug: brandItem.slug,
          value: brandName,
        });
        onSetValue(type, { id, slug, value: modelName });
      }
    } else {
      onSetValue(type, { id, slug, value: conditions[0] });
    }

    value && setValue('');
  };

  return (
    <div ref={smartSearchRef} className='relative'>
      <div
        className={`${
          isSelectCar ? 'min-w-max' : 'sm:w-[568px] lg:w-[758px]'
        } relative z-20 rounded-[10px] bg-white text-blue`}
      >
        <div className='flex w-full'>
          <div
            className={`${
              isSelectCar ? '' : 'shadow-searchInput'
            } flex grow items-center rounded-[10px]`}
          >
            <input
              disabled={isDisabled}
              type='text'
              placeholder={placeholder}
              value={value}
              onChange={(e) => changeHandler(e.target.value)}
              className={`${
                openSuggestion ? 'border-green' : 'border border-gray-100'
              } ${
                isSelectCar
                  ? 'min-h-[46px] sm:px-2.5 text-sm'
                  : 'placeholder-blue placeholder-opacity-60 sm:rounded-l-[10px] sm:rounded-r-none min-h-[56px] sm:px-5 text-base'
              } h-full w-full truncate px-2.5 align-middle outline-none focus:border-green focus:ring-transparent`}
              onKeyDown={(e) => keyDownHandler(e.key)}
              onFocus={() => setOpenSuggestion(true)}
            />
          </div>
          {!isSelectCar && (
            <Button
              size='search-input-btn'
              name='Поиск'
              onClick={buttonClickHandler}
              className='-ml-2 hidden w-40 text-[16px] sm:block sm:text-[20px]'
            />
          )}
        </div>
      </div>
      <Suggestions
        isSelectCar={isSelectCar}
        show={openSuggestion}
        onSelect={suggestionSelectHandler}
        suggestions={suggestions}
      />
      {!isSelectCar && (
        <Helper onChange={changeHandler} isCarHelper={isCarSearch} />
      )}
      {!isSelectCar && (
        <Button
          name='Поиск'
          onClick={buttonClickHandler}
          className='w-full pt-2 sm:hidden'
        />
      )}
    </div>
  );
};
