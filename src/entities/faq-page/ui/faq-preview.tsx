import React from 'react';
import { PageLayout } from '../../layouts';

export const FaqPreview = () => {
  return (
    <PageLayout className='bg-gray-100 pt-5 pb-10 md:pt-0 md:pb-0 bg-faq sm:bg-faq-sm bg-no-repeat bg-right-top sm:bg-right lg:bg-none'>
      <div className='lg:bg-faq-lg bg-no-repeat lg:bg-right sm:bg-none'>
        <div className='flex justify-end sm:justify-start sm:items-center pt-48 sm:pt-0 md:min-h-[520px]'>
          <div className='text-sm md:text-base sm:basis-1/2'>
            <div className='text-xl md:text-2xl lg:text-4xl font-semibold mb-4 sm:mb-5'>
              Помощь/FAQ
            </div>
            <p className='mb-4 md:mb-10'>
              При возникновении вопросов, вы можете обратиться любым удобным для
              себя способом. Для связи с технической поддержкой есть три
              варианта:
            </p>
            <ul className=''>
              <li className='flex mb-2 md:mb-7'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                Общение через онлайн-чат
              </li>
              <li className='flex mb-2 md:mb-7'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                Общение через электронную почту
              </li>
              <li className='flex mb-2 md:mb-7'>
                <div className='w-2.5 h-2.5 bg-gradient-to-r from-[#5DC563] to-[#34EAC7] rounded-full mr-2.5 mt-2'></div>
                Общение по указанному номеру телефона
              </li>
            </ul>
            <p className=''>
              При возникновении вопросов иного характера, можно обратиться через
              форму обратной связи. Но перед обращением в техническую поддержку,
              ознакомьтесь с вопросами и ответами, представленными ниже.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
