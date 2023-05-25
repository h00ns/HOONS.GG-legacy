import styled from '@emotion/styled';
import { useRouter } from 'next/router';

//  components
import SummonerInfoCard from './SummonerInfoCard';

//  constants

//  hooks
import { useGetSummonerInfoByNameFetch } from '@hooks/fetch/useSummonerFetch';
import Loading from '@components/_templetes/Loading';

const Layout = styled.div`
  margin-top: 48px;
`;

export default function Content() {
  const router = useRouter();
  const { name: summonerName } = router.query as { name: string };

  const { getSummonerInfoByNameData: summonerData, isCustomLoading } = useGetSummonerInfoByNameFetch({ summonerName });

  return (
    <>
      {isCustomLoading ? (
        <Loading isLoading={isCustomLoading} />
      ) : (
        <Layout>{summonerData && <SummonerInfoCard data={summonerData} />}</Layout>
      )}
    </>
  );
}
