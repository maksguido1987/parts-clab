import { Button, PageLayout } from '../../../entities';

export const SectionRequest: React.FC = () => {
  return (
    <PageLayout className='py-6 sm:py-10 md:py-12'>
      <div className='bg-green-card md:rounded-[20px] rounded-xl max-w-full mx-auto'>
        <div className='md:rounded-[20px] rounded-xl md:bg-selection-md lg:bg-selection bg-selection-xs bg-no-repeat bg-right-bottom '>
          <div className='md:px-10 md:py-16 px-3 py-5'>
            <h2 className='lg:text-4xl sm:text-2xl text-sm font-semibold md:mb-5 mb-2.5'>
              Бесплатно <br className='sm:hidden' /> ищем детали за вас
            </h2>
            <p className='md:mb-8 mb-5 text-10px sm:text-base'>
              Когда нет времени искать <br className='md:hidden' /> или нужна
              консультация специалиста
            </p>
            <Button
              color='purple'
              size='selection-request-btn'
              name='Запрос на подбор детали по вин-номеру'
              className='sm:text-base text-10px w-[216px] sm:w-[360px]'
              onClick={() => console.log('request-btn')}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
