import styled from '@emotion/styled';
import { useGetMatchDetailFetch } from '@hooks/fetch/useMatchFetch';

type Props = {
  matchId: string;
};

const Layout = styled.div`
  padding: 8px;
  border: 3px solid red;
`;

export default function MatchCard({ matchId }: Props) {
  const { getMatchDetailData: detailData } = useGetMatchDetailFetch({ matchId });

  return <Layout></Layout>;
}
