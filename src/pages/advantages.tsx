import type { NextPage } from 'next';
import { Quote, AdvantagesSection, DetailRequared, ProblemResolution } from '../entities';
import { PageWrapper } from '../widgets';

const Advantages: NextPage = () => {
  return (
    <PageWrapper>
      <DetailRequared />
      <AdvantagesSection />
      <Quote />
      <ProblemResolution />
    </PageWrapper>
  );
};

export default Advantages;
