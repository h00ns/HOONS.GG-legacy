import SearchContent from '@components/_organisms/service/SearchContent';
import DefaultLayout from '@components/layouts/DefaultLayouts';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 528px;
  padding: 256px 40px;
  margin: 0 auto;
`;

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hoon.gg - 검색</title>
        <meta name="title" content="Hoon.gg - 검색" />
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
