import styled from '@emotion/styled';

//  components
import MatchCard from './MatchCard';

//  hooks
import { useGetMatchsFetch } from '@hooks/fetch/useMatchFetch';

type Props = {
  puuid?: string;
};

const Layout = styled.div`
  display: grid;
  row-gap: 4px;
`;

export default function MatchCardList({ puuid }: Props) {
  const { getMatchsData: matchsData } = useGetMatchsFetch({ puuid });

  return (
    <Layout>
      {matchsData?.map((matchId) => (
        <MatchCard matchId={matchId} key={matchId} />
      ))}
    </Layout>
  );
}
