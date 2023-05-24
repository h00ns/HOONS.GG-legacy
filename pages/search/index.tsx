import { NextPage } from 'next';
import Head from 'next/head';
import styled from '@emotion/styled';

//  components
import DefaultLayout from '@components/layouts/DefaultLayouts';
import SearchContent from '@components/_organisms/service/SearchContent';

//  constants
import { mq } from '@utils/style';

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 528px;
  padding: 210px 40px;
  margin: 0 auto;

  ${mq['md']} {
    padding: 210px 20px;
  }
`;

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOONS.GG - 검색</title>
        <meta name="title" content="HOONS.GG - 검색" />
      </Head>
      <DefaultLayout>
        <SearchWrapper>
          {/* SearchContent */}
          <SearchContent />
          {/* SearchContent end */}
        </SearchWrapper>
      </DefaultLayout>
    </>
  );
};

export default Search;
