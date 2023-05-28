import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';
import ChampionBox from './ChampionBox';
import KdaBox from './KdaBox';

//  constants
import { blue, gray, red } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { TypoSize } from '@constants/atoms/Typography';

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
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};

  display: flex;
  align-items: center;
  column-gap: 12px;

  ${({ win }) =>
    !win &&
    `
    background: ${red.red1};
  `}
`;

export default function MatchCard({ matchId, puuid }: Props) {
  const { getMatchDetailData: detailData } = useGetMatchDetailFetch({ matchId });
  const myData = detailData?.info.participants.find((data) => data.puuid === puuid);
  const { win, spell1Casts, spell2Casts, spell3Casts, spell4Casts } = myData ?? {};

  if (!myData) return null;
  return (
    <Layout win={win}>
      <MatchInfoBox data={myData} />
      <ChampionBox data={myData} />
      <KdaBox data={myData} />
      <SpellBox />
    </Layout>
  );
}
