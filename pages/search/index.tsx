import { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import DefaultLayout from '@components/layouts/DefaultLayouts';
import SearchTemplate from '@components/_templetes/SearchTemplate';

//  constants
import { mq } from '@utils/style';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 728px;
  padding: 210px 40px;
  margin: 0 auto;

  ${mq['md']} {
    padding: 210px 20px;
  }
`;

const Search: NextPage = () => {
  const { t } = useTranslation('search');

  return (
    <>
      <Head>
        <title>{t('meta-title')}</title>
        <meta name="title" content={t('meta-title')} />
      </Head>
      <DefaultLayout>
        <SearchWrapper>
          {/* Search Template */}
          <SearchTemplate />
          {/* Search Template end */}
        </SearchWrapper>
      </DefaultLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'search'])),
  },
});

export default Search;
