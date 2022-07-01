import type { NextPage } from 'next';
import {
  articleSearch,
  carSearch,
  HowPageBunner,
  Questions,
  SearchGuide,
} from '../entities';
import { PageWrapper } from '../widgets';

const How: NextPage = () => {
  return (
    <PageWrapper>
      <Questions />
      <HowPageBunner />
      <SearchGuide titleGuide='Поиск по автомобилю' dataGuide={carSearch} />
      <SearchGuide titleGuide='Поиск по артикулу' dataGuide={articleSearch} />
    </PageWrapper>
  );
};

export default How;
