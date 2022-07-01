import { NextPage } from 'next/types';
import {
  Breadcumps,
  IImageCarousel,
  PageLayout,
} from '../../entities';
import { categoryData } from '../../features';
import { PageWrapper, ProductInfo, Product, Analogs } from '../../widgets';

interface IProps {
  articul: string;
  offersCount: number;
  images: IImageCarousel[];
}

const Card: NextPage<IProps> = () => {
  return (
    <PageWrapper>
      <PageLayout className='pt-10 relative'>
        <Breadcumps
          breadcrumpsData={[{ name: 'Главная' }, { name: 'Амортизатор' }]}
          className='pb-5'
        />
        <Product />
        {/** Параметры */}
        <ProductInfo />
        {/** Аналоги */}
        <Analogs cardsData={categoryData} />
      </PageLayout>
    </PageWrapper>
  );
};

// export const getServerSideProps: GetServerSideProps = async () => {

// }

export default Card;
