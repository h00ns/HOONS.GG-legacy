import styled from '@emotion/styled';

type Props = {
  matchId: string;
};

const Layout = styled.div`
  padding: 8px;
  border: 3px solid red;
`;

export default function MatchCard({ matchId }: Props) {
  return <Layout></Layout>;
}
