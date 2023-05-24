import styled from '@emotion/styled';
import { useRouter } from 'next/router';

//  components
import SummonerInfoCard from './SummonerInfoCard';

//  constants

//  hooks
import { useGetSummonerInfoByNameFetch } from '@hooks/fetch/useSummonerFetch';

const Layout = styled.div`
  margin-top: 48px;
`;

export default function Content() {
  const router = useRouter();
  const { name: summonerName } = router.query as { name: string };

  const { getSummonerInfoByNameData: summonerData } = useGetSummonerInfoByNameFetch({ summonerName });

  return (
    <Layout>
      <SummonerInfoCard />
    </Layout>
  );
}
