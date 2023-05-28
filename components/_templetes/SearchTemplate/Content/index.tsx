import styled from '@emotion/styled';
import { useRouter } from 'next/router';

//  components
import SummonerInfoCard from './SummonerInfoCard';
import TierCardList from './TierCardList';
import MatchCardList from './MatchCardList';

//  hooks
import { useGetSummonerInfoByNameFetch } from '@hooks/fetch/useSummonerFetch';

const Layout = styled.div`
  margin-top: 48px;
`;

export default function Content() {
  const router = useRouter();
  const { name: summonerName } = router.query as { name: string };

  const { getSummonerInfoByNameData: summonerData } = useGetSummonerInfoByNameFetch({ summonerName });
  const { id, puuid } = summonerData ?? {};

  // only Summoner Data
  if (summonerData) {
    return (
      <Layout>
        <SummonerInfoCard data={summonerData} key={id} />
        <TierCardList id={id} />
        <MatchCardList puuid={puuid} />
      </Layout>
    );
  } else {
    return null;
  }
}
