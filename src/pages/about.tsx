import type { NextPage } from 'next';
import Image from 'next/image';
import { PageLayout } from '../entities';
import { PageWrapper } from '../widgets';
import telIcon from '../../public/img/static-pages/about-tel.svg';
import emailIcon from '../../public/img/static-pages/about-email.svg';
import addressIcon from '../../public/img/static-pages/about-address.svg';

const About: NextPage = () => {

  return (
    <PageWrapper>
      <PageLayout>
        <h2 className='text-xl sm:text-2xl md:text-[34px] font-semibold mb-3 sm:mb-5 lg;mb-7'>
          О сервисе
        </h2>
        <div className='text-sm lg:text-base lg:flex gap-10'>
          <div className='basis-2/3 mb-8 lg:mb-0'>
            <p className='mb-3.5'>
              Мы рады приветствовать Вас в PartsClub – это маркетлпейс по
              продаже автозапчастей и автотоваров от продавцов на территории
              России и СНГ Площадка полностью автоматизирована вы можете купить
              детали и автотовары без звонков, просто выберите деталь, укажите
              адрес доставки и оплачиваете ваш заказ, мы доставим его в город
              или населённый пункт по России и СНГ Наша площадка является
              гарантов всех сделок и помогает решать все спорные моменты
              Выбирайте проверенных продавцов — это гарантирует качество и
              высокий уровень сервиса У нас удобный поиск автозапчастей и
              определение деталей по VIN номеру. Мы предлагаем как оригинальные
              запчасти, так и качественные заменители
            </p>
            <p className=''>
              <span className='block font-semibold'>
                Работа в режиме on-line.
              </span>
              Заказ и отгрузка оформляется в реальном времени. Вы можете
              отслеживать все стадии Вашей закупки от заказа до получения.
              Автозапчасти для европейских, корейских и японских легковых
              автомобилей. Ассортимент включает автозапчасти, комплектующие,
              аксессуары и смазочные материалы. Гарантия на всю продукцию.
            </p>
          </div>
          <div className='text-sm lg:text-base basis-1/3 shrink-0'>
            <ul className='md:whitespace-nowrap flex flex-col gap-y-2.5'>
              <li className='flex items-center'>
                <div className='w-10 h-10 border border-green rounded-full flex items-center justify-center mr-3.5 shrink-0'>
                  <Image width={13} height={13} alt='about-tel' src={telIcon} />
                </div>
                <a
                  href='tel:+74958514459'
                  className='hover:text-green transition'
                >
                  +7 (499) 350-32-46
                </a>
              </li>
              <li className='flex items-center'>
                <div className='w-10 h-10 border border-green rounded-full flex items-center justify-center mr-3.5 shrink-0'>
                  <Image
                    width={13}
                    height={13}
                    alt='about-email'
                    src={emailIcon}
                  />
                </div>
                <a
                  href='mailto:info@partsclub.ru'
                  className='hover:text-green transition'
                >
                  info@partsclub.ru
                </a>
              </li>
              <li className='flex items-center'>
                <div className='w-10 h-10 border border-green rounded-full flex items-center justify-center mr-3.5 shrink-0'>
                  <Image
                    width={13}
                    height={13}
                    alt='about-address'
                    src={addressIcon}
                  />
                </div>
                Москва. Нижняя Красносельская д. 15 с.1 оф. 6
              </li>
            </ul>
          </div>
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default About;
