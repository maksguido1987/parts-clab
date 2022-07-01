import React, { useEffect, useState } from 'react';
import { Tooltip } from '../../../entities';
import { useClickOutside, useToggle } from '../../../shared/lib';
import { SmartSearch } from '../../smart-search';

export const SelectCar = () => {
  const [x, setX] = useToggle();
  const [openTooltip, setOpenTooltip] = useState(false);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [generation, setGeneration] = useState('');
  const [modification, setModification] = useState('');
  const [openSelectCarInput, setOpenSelectCarInput] = useState(false);

  /** Составное название авто */
  const car = `${brand} ${model} ${generation} ${modification}`;

  /** При клике вне компонента закрывает инпут выбора и пинает useEffect, чтобы установить значения */
  const smartSearchRef = useClickOutside(() => {
    setOpenSelectCarInput(false);
    setX();
  });

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
    brandFromLocalStorage
      ? setBrand(brandFromLocalStorage.value)
      : setBrand('');
    modelFromLocalStorage
      ? setModel(modelFromLocalStorage.value)
      : setModel('');
    generationFromLocalStorage
      ? setGeneration(generationFromLocalStorage.value)
      : setGeneration('');
    modificationFromLocalStorage
      ? setModification(modificationFromLocalStorage.value)
      : setModification('');
  }, [x]);

  const onClearingLocalStorage = () => {
    localStorage.removeItem('userCarBrand');
    localStorage.removeItem('userCarModel');
    localStorage.removeItem('userCarGeneration');
    localStorage.removeItem('userCarModification');
    setX();
  };

  return (
    <div
      ref={smartSearchRef}
      className={`${
        brand ? '' : 'hover:bg-green-light'
      } group relative hidden cursor-pointer border-r border-l border-gray-100 px-2 duration-150 md:block`}
      onMouseMove={() => setOpenTooltip(true)}
      onMouseLeave={() => setOpenTooltip(false)}
    >
      <div className='flex h-16 w-52 flex-col justify-center xl:w-60'>
        <div
          onClick={() => setOpenSelectCarInput((state) => !state)}
          className={`${
            brand
              ? 'text-blue'
              : 'font-bold text-green underline group-hover:no-underline'
          } truncate text-center `}
        >
          {brand ? car : 'Укажите автомобиль'}
        </div>
      </div>
      {openSelectCarInput && <SmartSearch isSelectCar />}
      {brand && (
        <Tooltip
          className='left-1/3 mt-2 w-full text-sm text-green'
          isShowTooltip={openTooltip}
        >
          {car}
        </Tooltip>
      )}
      {brand && (
        <div
          className='absolute top-1/2 right-4 flex h-9 w-9 -translate-y-1/2 items-center rounded-md bg-green-light'
          onClick={onClearingLocalStorage}
        >
          <span className='h-0.5 w-1/2 translate-x-1/2 rotate-45 bg-blue'></span>
          <span className='h-0.5 w-1/2 -translate-x-1/2 -rotate-45 bg-blue'></span>
        </div>
      )}
    </div>
  );
};
