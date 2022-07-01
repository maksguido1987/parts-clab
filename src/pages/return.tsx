import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Button,
  Input,
  PageLayout,
  PhoneInputWrapper,
  requestSelectData,
  ReturnDescription,
  ReturnPreview,
  Select,
  Textarea,
} from '../entities';
import { useFile, useInput } from '../shared/lib';
import { PageWrapper } from '../widgets';
import loadFileIcon from '../../public/img/buttons-img/load-file.svg';
import { useEffect, useState } from 'react';

const Return: NextPage = () => {
  const [inputFile, setInputFile] = useFile();
  const [isValidForm, setIsValidForm] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [selectValue, setSelectValue] = useState('Причина возврата');
  const input = useInput('', {
    isEmpty: true,
    maxLenght: 10,
  });
  const textarea = useInput('', {
    isEmpty: true,
    maxLenght: 500,
  });

  const onCheckValidPhone = (value: boolean) => {
    setIsValidPhone(value);
  };

  const onSetSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectValue(value);
  };

  useEffect(() => {
    if (input.isValidInput && textarea.isValidInput && isValidPhone) {
      setIsValidForm(true);
    } else {
      setIsValidForm(false);
    }
  }, [input.isValidInput, textarea.isValidInput, isValidPhone]);

  const countFiles = inputFile.length !== 0 ? inputFile.length : null;

  return (
    <PageWrapper>
      <ReturnPreview />
      <ReturnDescription />
      <PageLayout className='pt-14 pb-8 sm:pt-20 sm:pb-10'>
        <form className='rounded-[10px] bg-gray-100 py-5 px-2.5 sm:p-10 md:rounded-[20px]'>
          <fieldset>
            <legend className='mb-3.5 text-center text-lg font-semibold sm:text-2xl'>
              Заявка на возврат
            </legend>
            <p className='mx-auto mb-6 text-center text-sm sm:mb-10 sm:max-w-lg sm:text-base'>
              Заполните форму и наши специалисты свяжутся с вами в ближайшее
              время.
            </p>
            <div className='mb-5 justify-between gap-x-5 sm:flex'>
              <Input
                type='text'
                placeholder='Имя'
                {...input}
                value={input.value}
                onChange={input.onChange}
                onBlur={input.onBlur}
                className='mb-5 sm:mb-0'
              />
              <PhoneInputWrapper
                placeholder='Номер телефона'
                onCheckValidPhone={onCheckValidPhone}
                phoneValue={''}
                setPhoneValue={() => {}}
              />
            </div>
            <div className='mb-5'>
              <Select
                onSetSelectValue={onSetSelectValue}
                selectValue={selectValue}
                options={requestSelectData}
              />
            </div>
            <Textarea
              placeholder='Комментарий'
              {...textarea}
              value={textarea.value}
              onChange={textarea.onChange}
              onBlur={textarea.onBlur}
              className='mb-4'
            />
            <div className='justify-between gap-x-5 sm:flex'>
              <div className='mb-4 basis-1/2 sm:mb-0'>
                <label className='relative inline-flex cursor-pointer items-center border-b border-dotted border-green'>
                  <span className='mr-2 text-blue'>Прикрепить файлы</span>
                  <Image
                    width={16}
                    height={16}
                    alt='add-file'
                    src={loadFileIcon}
                  />
                  <span className='ml-1'>{countFiles}</span>
                  <input
                    type='file'
                    multiple
                    className='invisible absolute opacity-0'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setInputFile(e)
                    }
                  />
                </label>
              </div>
              <Button
                name='Отправить'
                onClick={() => {
                  console.log('отправить форму');
                }}
                className='w-full sm:basis-1/2'
                size='form-btn'
                disabled={!isValidForm}
              />
            </div>
          </fieldset>
        </form>
      </PageLayout>
    </PageWrapper>
  );
};

export default Return;
