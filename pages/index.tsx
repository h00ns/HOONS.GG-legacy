import MainSection from '@components/_templetes/Home/MainSection';
import Section0 from '@components/_templetes/Home/Section0';
import Section1 from '@components/_templetes/Home/Section1';
import Section2 from '@components/_templetes/Home/Section2';
import DefaultLayout from '@components/layouts/DefaultLayouts';
import styled from '@emotion/styled';
import { gray } from '@styles/Colors';
import { mq } from '@utils/style';
import type { NextPage } from 'next';

const HomeWrapper = styled.div``;

const Section = styled.section<{ backgroundGray?: boolean }>`
  padding: 160px 0;
  position: relative;

  ${mq['md']} {
    padding: 120px 0;
  }

  ${mq['sm']} {
    padding: 80px 0;
  }

  ${({ backgroundGray }) =>
    backgroundGray &&
    `
   background: ${gray.gray1};
  `}
`;

const Home: NextPage = () => {
  return (
    <DefaultLayout isHome>
      <HomeWrapper>
        {/* Main Section */}
        <MainSection />
        {/* Main Section end */}

        {/* Section 0 */}
        <Section>
          <Section0 />
        </Section>
        {/* Section 0 end */}

        {/* Section 1 */}
        <Section backgroundGray>
          <Section1 />
        </Section>
        {/* Section 1 end */}

        {/* Section 2 */}
        <Section>
          <Section2 />
        </Section>
        {/* Section 2 end */}
      </HomeWrapper>
    </DefaultLayout>
  );
};

export default Home;
