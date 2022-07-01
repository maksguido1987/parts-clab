import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  Button,
  HelpPreview,
  Input,
  PageLayout,
  PhoneInputWrapper,
  Textarea,
} from '../entities';
import { PageWrapper } from '../widgets';
import plusFileIcon from '../../public/img/buttons-img/plus-file.svg';
import { useFile, useInput } from '../shared/lib';

const Help: NextPage = () => {
  const [isValidForm, setIsValidForm] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [inputFile, setInputFile] = useFile();
  const input = useInput('', {
    isEmpty: true,
    maxLenght: 16,
  });
  const textarea = useInput('', {
    isEmpty: true,
    maxLenght: 500,
  });

  const onCheckValidPhone = (value: boolean) => {
    setIsValidPhone(value);
  };

  /** Функция рендера загруженных фотографий */
  const renderPhotos = (source: string[]) => {
    return source.map((photo, idx) => {
      return (
        <div key={idx} className='relative h-16 basis-1/4'>
          <Image layout='fill' objectFit='contain' alt='img' src={photo} />
        </div>
      );
    });
  };

  useEffect(() => {
    if (input.isValidInput && textarea.isValidInput && isValidPhone) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [input.isValidInput, textarea.isValidInput, isValidPhone]);

  return (
    <PageWrapper>
      <HelpPreview />
      <PageLayout className='my-10 lg:my-20'>
        <form className='lg:flex'>
          <legend className='mb-7 text-xl font-semibold sm:mb-10 sm:text-2xl lg:basis-1/2 lg:text-[34px]'>
            Ищем деталь за Вас
          </legend>
          <div className='max-w-[590px] space-y-5 md:space-y-7 lg:basis-1/2'>
            <Input
              type='text'
              placeholder='Вин-номер автомобиля'
              {...input}
              value={input.value}
              onChange={input.onChange}
              onBlur={input.onBlur}
            />
            <Textarea
              placeholder='Название детали, или артикул'
              {...textarea}
              value={textarea.value}
              onChange={textarea.onChange}
              onBlur={textarea.onBlur}
            />
            <div className='-mt-2 text-xs sm:text-sm'>
              <p>
                Если деталь имеет место установки или направленность, укажите
                точное ее расположение
              </p>
              <p className='text-green'>
                Пример: Рычаг передний верхний правый или фара передняя правая
                основная
              </p>
            </div>
            <label className='relative flex h-12 w-full cursor-pointer items-center rounded-md border border-gray-200 px-5 md:rounded-lg'>
              <Image width={16} height={16} alt='add-file' src={plusFileIcon} />
              <span className='ml-2.5 text-sm text-gray-400'>
                Добавить фотографию детали
              </span>
              <input
                type='file'
                accept='image/*'
                multiple
                className='invisible absolute h-0 w-0 opacity-0'
                onChange={setInputFile}
              />
            </label>
            {inputFile.length > 0 && (
              <div className='mb-4 flex flex-wrap justify-between gap-4'>
                {renderPhotos(inputFile)}
              </div>
            )}
            <PhoneInputWrapper
              placeholder='Номер телефона'
              onCheckValidPhone={onCheckValidPhone} phoneValue={''} setPhoneValue={() => {}}            />
            <Button
              name='Отправить запрос'
              onClick={() => {}}
              className='w-full sm:basis-1/2'
              size='form-btn'
              disabled={!isValidForm}
            />
          </div>
        </form>
      </PageLayout>
    </PageWrapper>
  );
};

export default Help;
