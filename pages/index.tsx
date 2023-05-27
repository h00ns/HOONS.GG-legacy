import styled from '@emotion/styled';
import type { NextPage } from 'next';

/**
 *  Components
 */
import DefaultLayout from '@components/layouts/DefaultLayouts';
// templates
import MainSection from '@components/_templetes/Home/MainSection';
import Section0 from '@components/_templetes/Home/Section0';
import Section1 from '@components/_templetes/Home/Section1';
import Section2 from '@components/_templetes/Home/Section2';

// constants
import { gray } from '@styles/Colors';
import { mq } from '@utils/style';

//  다국어 지원
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomeWrapper = styled.div``;

const Section = styled.section<{ backgroundGray?: boolean }>`
  padding: 160px 20px;
  position: relative;

  ${mq['md']} {
    padding: 120px 20px;
  }

  ${mq['sm']} {
    padding: 80px 20px;
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

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'home'])),
  },
});

export default Home;
