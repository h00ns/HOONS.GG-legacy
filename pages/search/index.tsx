import DefaultLayout from '@components/layouts/DefaultLayouts';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import Head from 'next/head';

const SearchWrapper = styled.div``;

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hoon.gg - 검색</title>
        <meta name="title" content="Hoon.gg - 검색" />
      </Head>
      <DefaultLayout>
        <SearchWrapper></SearchWrapper>
      </DefaultLayout>
    </>
  );
};

export default Search;
