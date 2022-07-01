import type { NextPage } from 'next';
import { Statistic, HowWorks, Invite, Benefists, HomeMap } from '../entities';
import { CatalogWidget, SectionRequest } from '../features';
import { PageWrapper } from '../widgets';
import { SmartSearch } from '../widgets/smart-search';

const Home: NextPage = () => {
  return (
    <PageWrapper>
      <SmartSearch />
      <CatalogWidget countOffers={147560} />
      <SectionRequest />
      <HowWorks />
      <Benefists />
      <Statistic
        sellerCount={52}
        offerCount={7345095}
        userCount={481}
        orderCount={182}
      />
      <Invite />
      <HomeMap />
    </PageWrapper>
  );
};

export default Home;
