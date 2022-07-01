import type { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import {
  PageLayout,
  PaymentListItem,
  PaymentPageBunner,
  PaymentPreview,
} from '../entities';
import { PageWrapper, YandexMap } from '../widgets';
import visaIcon from '../../public/img/static-pages/visa.png';
import masterCardIcon from '../../public/img/static-pages/master-card.png';
import mirIcon from '../../public/img/static-pages/mir.png';

const Payment: NextPage = () => {
  return (
    <PageWrapper>
      <PaymentPreview />
      <PageLayout className='pt-10 pb-5'>
        <div className='md:flex'>
          <div className='mb-2.5 basis-1/2 text-base font-semibold sm:text-2xl'>
            Оплата
          </div>
          <div className='basis-1/2'>
            <p className='mb-7 text-sm sm:text-base'>
              <span className='font-semibold'>
                Оплатить заказ очень просто!
              </span>{' '}
              <br /> Никаких сложных схем и ввода персональных данных! Оплата
              заказа осуществляется удобным для вас способом. Мы предлагаем три
              наиболее популярных варианта:
            </p>
            <ul>
              <PaymentListItem>
                Оплата на сайте, сразу после оформления заказа.
              </PaymentListItem>
              <PaymentListItem>
                Оплата в пункте самовывоза наличными или на карту.
              </PaymentListItem>
              <PaymentListItem className='mb-7'>
                Оплата курьеру во время доставки. Курьер принимает наличную и
                безналичную оплату.{' '}
              </PaymentListItem>
            </ul>
            <p className='mb-7 rounded-[10px] bg-[#E9F5EA] px-2.5 py-4 text-xs sm:text-base'>
              <span className='font-semibold text-green'>Важно!</span> Оплата на
              сайте – это наиболее выгодный вариант. При оплате заказа лично на
              руки, стоимость возрастает на 10%. Это установленное правило.
            </p>
            <p className='mb-5 text-sm'>
              Выбрать оптимальный способ оплаты можно при оформлении заказа.
              Сразу после добавления товара в корзину необходимо ввести
              контактные данные и подобрать вариант оплаты из всплывающего окна.
            </p>
            <p className='mb-7 rounded-[10px] bg-[#FFF2F2] px-2.5 py-4 text-xs sm:text-base'>
              <span className='font-semibold text-red-600'>Важно!</span>{' '}
              Оплатить часть заказа картой, а часть наличными – нельзя.
              Использовать можно только один способ оплаты.
            </p>
            <hr className='border-gray-100' />
            <div className='flex max-w-xs justify-around py-4'>
              <Image width={61} height={21} src={visaIcon} alt='visa' />
              <Image
                width={37}
                height={28}
                src={masterCardIcon}
                alt='master-card'
              />
              <Image width={70} height={20} src={mirIcon} alt='mir' />
            </div>
          </div>
        </div>
      </PageLayout>
      <PaymentPageBunner />
      <PageLayout className='pt-10 pb-5'>
        <div className='md:flex'>
          <div className='mb-2.5 basis-1/2 text-base font-semibold sm:text-2xl'>
            Получение заказа
          </div>
          <div className='basis-1/2'>
            <p className='mb-7 text-sm sm:text-base'>
              Для вашего удобства, процесс доставки тоже имеет несколько
              вариантов. При оформлении заказа можно выбрать:
            </p>
            <ul>
              <PaymentListItem>Cамовывоз из магазина.</PaymentListItem>
              <PaymentListItem className='mb-7'>
                Доставку на указанный адрес.
              </PaymentListItem>
            </ul>
            <p className='mb-5 text-sm'>
              Доставка товаров возможно по всем страна СНГ, без исключений.
              Доставка осуществляется непосредственно на указанный адрес или в
              почтовое отделение. Вы самостоятельно выбираете подходящий
              вариант. Сроки и стоимость напрямую зависят от страны и города,
              т.е. удаленности. На цену влияют габариты посылки и общий ее вес.
              Уточнить предварительную стоимость можно на сайте. Цена
              рассчитывается индивидуально в процессе оформления. Вы
              самостоятельно подбираете подходящий вариант.
            </p>
            <p className='mb-7 rounded-[10px] bg-[#E9F5EA] px-2.5 py-4 text-xs sm:text-base'>
              <span className='font-semibold text-green'>
                Остались вопросы?
              </span>{' '}
              Дополнительную информацию предоставляет техническая служба
              поддержки. Все условия сотрудничества между покупателем и
              продавцом – максимально прозрачные.
            </p>
          </div>
        </div>
        <div className='py-6 md:py-10 lg:py-12'>
          <h3 className='mb-7 text-xl font-semibold md:mb-10 md:text-[28px] lg:text-[34px]'>
            <span className='text-green'>Более 1000</span> пунктов самовывоза
          </h3>
          <YandexMap
            center={[57.756473, 84.778078]}
            zoom={3}
            className='h-[250px] sm:h-[380px] md:h-[480px]'
          />
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default Payment;
