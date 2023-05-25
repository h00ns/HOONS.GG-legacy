import { NextPage } from 'next';
import styled from '@emotion/styled';

//  components
import DefaultLayout from '@components/layouts/DefaultLayouts';
import Head from 'next/head';
import ErrorContent from '@components/_templetes/ErrorContent';

// constants
import { mq } from '@utils/style';

const ErrorWrapper = styled.div`
  width: 100%;
  max-width: 528px;
  padding: 210px 40px;
  margin: 0 auto;

  ${mq['md']} {
    padding: 210px 20px;
  }
`;

const Error: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOONS.GG - Error</title>
        <meta name="title" content="HOONS.GG - Error" />
      </Head>
      <DefaultLayout>
        <ErrorWrapper>
          {/* Error Content */}
          <ErrorContent />
          {/* Error Content end */}
        </ErrorWrapper>
      </DefaultLayout>
    </>
  );
};

export default Error;
