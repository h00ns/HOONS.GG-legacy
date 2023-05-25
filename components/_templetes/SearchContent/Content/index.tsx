import styled from '@emotion/styled';
import { useRouter } from 'next/router';

//  components
import SummonerInfoCard from './SummonerInfoCard';

//  constants

//  hooks
import { useGetSummonerDetailFetch, useGetSummonerInfoByNameFetch } from '@hooks/fetch/useSummonerFetch';
import Loading from '@components/_templetes/Loading';
import TierCardList from './TierCardList';

const Layout = styled.div`
  margin-top: 48px;
`;

export default function Content() {
  const router = useRouter();
  const { name: summonerName } = router.query as { name: string };

  const { getSummonerInfoByNameData: summonerData } = useGetSummonerInfoByNameFetch({ summonerName });
  const { id } = summonerData ?? {};

  const { getSummonerDetailData: summonerDetailData } = useGetSummonerDetailFetch({ id });

  return (
    <>
      <Layout>
        {summonerData && (
          <>
            <SummonerInfoCard data={summonerData} />
            <TierCardList />
          </>
        )}
      </Layout>
    </>
  );
}
