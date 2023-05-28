import styled from '@emotion/styled';

//  components
import ChampionBox from './ChampionBox';
import KdaBox from './KdaBox';

//  constants
import { blue, gray, primary, red } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  hooks
import { useGetMatchDetailFetch } from '@hooks/fetch/useMatchFetch';
import SpellBox from './SpellBox';
import MatchInfoBox from './MatchInfoBox';

type Props = {
  matchId: string;
  puuid?: string;
};

const Layout = styled.div<{ win?: boolean }>`
  padding: 8px;

  background: ${blue.blue2};
  border-left: 5px solid ${primary.blue};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};

  display: flex;
  align-items: center;
  column-gap: 12px;

  ${({ win }) =>
    !win &&
    `
    background: ${red.red1};
    border-left: 5px solid ${red.red3};
  `}
`;

export default function MatchCard({ matchId, puuid }: Props) {
  const { getMatchDetailData: detailData } = useGetMatchDetailFetch({ matchId });
  const myData = detailData?.info.participants.find((data) => data.puuid === puuid);
  const { win } = myData ?? {};

  if (!detailData || !myData) return null;
  return (
    // only Data
    <Layout win={win}>
      <MatchInfoBox data={detailData} win={win} />
      <ChampionBox data={myData} />
      <KdaBox data={myData} />
      <SpellBox />
    </Layout>
  );
}
