import { StatisticItem } from './statistic-item';
import { PageLayout } from '../../layouts';

export interface IStatisticData {
  /** Подзаголовок статистики */
  name: string;
  /** Значение */
  value: number;
}

export interface IStatisticValues {
  sellerCount: number;
  offerCount: number;
  userCount: number;
  orderCount: number;
}

export const Statistic: React.FC<IStatisticValues> = (props) => {
  const renderItem = (item: IStatisticData, idx: number) => {
    const { value, name } = item;

    return <StatisticItem key={idx} value={value} name={name} />;
  };

  return (
    <PageLayout className='py-6 sm:pt-10 sm:pb-16 md:py-16'>
      <div className='rounded-[14px] md:rounded-[20px] max-w-full bg-gradient-to-r from-green-bg to-green mx-auto'>
        <div className='bg-statistic bg-no-repeat bg-statistic-pos sm:bg-sm-statistic-pos md:bg-md-statistic-pos lg:bg-lg-statistic-pos '>
          <div className='pl-5 sm:pl-10 sm:pr-5 lg:px-16 py-7 sm:py-20 sm:grid grid-cols-2 md:min-h-[360px] lg:min-h-[420px]'>
            <div className='w-32 sm:w-36 md:w-auto mb-5 md:mr-5 text-white'>
              <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold'>
                Выбирайте из лучшего
              </h2>
            </div>

            <div className='grid grid-cols-2 gap-y-7 lg:gap-y-16 xl:gap-x-12 lg:gap-x-2'>
              {getStatisticData(props).map(renderItem)}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export const getStatisticData = ({
  sellerCount,
  offerCount,
  userCount,
  orderCount,
}: IStatisticValues): IStatisticData[] => [
  {
    name: 'Продавца',
    value: sellerCount,
  },
  {
    name: 'Автозапчасти',
    value: offerCount,
  },
  {
    name: 'Покупатель',
    value: userCount,
  },
  {
    name: 'Сделки',
    value: orderCount,
  },
];
