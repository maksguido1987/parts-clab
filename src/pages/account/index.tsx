import { NextPage } from 'next/types';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Breadcumps, Button, PageLayout } from '../../entities';
import { PageWrapper } from '../../widgets';
import { IBreadcrumpsData } from '../../entities/breadcrumps/lib/breadcrupms-data';
import { AccountInfo, AccountTabItem, MyOrders } from '../../features';
import personalAccountIcon from '../../../public/img/account/personal-account.svg';
import myOrdersIcon from '../../../public/img/account/my-orders.svg';
import hpwSearchIcon from '../../../public/img/account/how-search.svg';
import chartBtnIcon from '../../../public/img/buttons-img/chart.svg';
import { useAuthLogoutMutation } from '../../shared/store';

const Account: NextPage = () => {
  const [activeTab, setActiveTab] = useState('Личный кабинет');
  const [authLogout] = useAuthLogoutMutation();
  const router = useRouter();

  return (
    <PageWrapper>
      <PageLayout className='mb-10'>
        <Breadcumps breadcrumpsData={breadcrumpsData} className='mb-10' />
        <div className='md:flex'>
          <div className='mb-10 mr-5 flex flex-col sm:mb-0 sm:pt-1.5 md:mr-10 lg:mr-16'>
            <AccountTabItem
              name='Личный кабинет'
              src={personalAccountIcon}
              active={activeTab}
              onClick={() => setActiveTab('Личный кабинет')}
              className='mb-7'
            />
            <AccountTabItem
              name='Мои заказы'
              src={myOrdersIcon}
              active={activeTab}
              onClick={() => setActiveTab('Мои заказы')}
              className='mb-7'
            />
            <AccountTabItem
              name='Как искать детали'
              src={hpwSearchIcon}
              active={activeTab}
              onClick={() => setActiveTab('Как искать детали')}
              className='mb-7'
            />
            <Button
              name='Присоедениться как продавец'
              onClick={() => {}}
              size='form-btn'
              isImage
              src={chartBtnIcon}
              className='mb-5 whitespace-nowrap text-sm'
            />
            <button
              className='text-sm underline'
              onClick={() => {
                authLogout('');
                router.push('/');
              }}
            >
              Выйти
            </button>
          </div>
          <div className='grow'>
            {activeTab === 'Личный кабинет' && <AccountInfo />}
            {activeTab === 'Мои заказы' && <MyOrders />}
          </div>
        </div>
      </PageLayout>
    </PageWrapper>
  );
};

export default Account;

const breadcrumpsData: IBreadcrumpsData[] = [
  {
    name: 'Главная',
    slug: '/',
  },
  {
    name: 'Личный кабинет',
    slug: '/account',
  },
];
