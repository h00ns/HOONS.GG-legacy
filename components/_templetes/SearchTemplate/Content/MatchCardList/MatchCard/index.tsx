import styled from '@emotion/styled';

//  components
import MatchInfoBox from './MatchInfoBox';
import ChampionBox from './ChampionBox';
import SpellBox from './SpellBox';
import KdaBox from './KdaBox';
import ItemBox from './ItemBox';

//  constants
import { blue, gray, primary, red } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  hooks
import { useGetMatchDetailFetch } from '@hooks/fetch/useMatchFetch';
import { mq } from '@utils/style';
import PlayerBox from './PlayerBox';

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

  ${mq['md']} {
    flex-direction: column;
    row-gap: 12px;
  }
`;

const FlexColumnBox = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

const FlexRowBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export default function MatchCard({ matchId, puuid }: Props) {
  const { getMatchDetailData: detailData } = useGetMatchDetailFetch({ matchId });
  const myData = detailData?.info.participants.find((data) => data.puuid === puuid);
  const { win } = myData ?? {};

  if (!detailData || !myData) return null;
  return (
    // only Data
    <Layout win={win}>
      <FlexColumnBox>
        {/* Match Info Box */}
        <MatchInfoBox data={detailData} win={win} />
        {/* Match Info Box end */}
        <FlexRowBox>
          <FlexColumnBox>
            {/* Champion Box */}
            <ChampionBox data={myData} />
            {/* Champion Box end */}
            {/* Spell Box */}
            <SpellBox data={myData} />
            {/* Spell Box end */}
            {/* Kda Box */}
            <KdaBox data={myData} />
            {/* Kda Box end */}
          </FlexColumnBox>
          {/* Item Box */}
          <ItemBox data={myData} />
          {/* Item Box end */}
        </FlexRowBox>
      </FlexColumnBox>
      <FlexColumnBox>
        {/* Player Box */}
        <PlayerBox data={detailData} />
        {/* Player Box end */}
      </FlexColumnBox>
    </Layout>
  );
}
