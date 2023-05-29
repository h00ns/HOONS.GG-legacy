import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

//  components
import Icon from '@components/_atoms/Icon';
import MatchInfoBox from './MatchInfoBox';
import ChampionBox from './ChampionBox';
import SpellBox from '../../../../../_organisms/service/SpellBox';
import KdaBox from './KdaBox';
import ItemBox from '../../../../../_organisms/service/ItemBox';
import PlayerBox from './PlayerBox';
import MatchDetailCard from './MatchDetailCard';

//  constants
import { blue, primary, red } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { mq } from '@utils/style';
import { IconSize } from '@constants/atoms/Icon';

//  hooks
import { useGetMatchDetailFetch } from '@hooks/fetch/useMatchFetch';

type Props = {
  matchId: string;
  puuid?: string;
};

const Layout = styled.div``;

const MatchCardWrapper = styled.div<{ win?: boolean }>`
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
  justify-content: center;
`;

const FlexRowBox = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const OpenBox = styled.div`
  flex: 1;
  height: 100%;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function MatchCard({ matchId, puuid }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { getMatchDetailData: detailData } = useGetMatchDetailFetch({ matchId });
  const participants = detailData?.info.participants;
  // 검색 유저 데이터
  const myData = participants?.find((data) => data.puuid === puuid);
  const { win, summonerName: myName } = myData ?? {};

  // 매치에서 가장 높은 피해량
  const maxDamage = {
    deal: Math.max(...(participants?.map((playerData) => playerData.totalDamageDealtToChampions) ?? [0])),
    taken: Math.max(...(participants?.map((playerData) => playerData.totalDamageTaken) ?? [0])),
  };

  if (!detailData || !myData) return null;
  return (
    // only Data
    <Layout>
      <MatchCardWrapper win={win}>
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
              <SpellBox size="25px" data={myData} />
              {/* Spell Box end */}
              {/* Kda Box */}
              <KdaBox data={myData} />
              {/* Kda Box end */}
            </FlexColumnBox>
            {/* Item Box */}
            <ItemBox size="25px" data={myData} />
            {/* Item Box end */}
          </FlexRowBox>
        </FlexColumnBox>
        <FlexColumnBox>
          {/* Player Box */}
          <PlayerBox data={detailData} myName={myName} />
          {/* Player Box end */}
        </FlexColumnBox>
        <OpenBox onClick={() => setIsOpen((prev) => !prev)}>
          <Icon
            name={isOpen ? 'arrow-up' : 'arrow-down'}
            size={IconSize.MINIMUM}
            fill={win ? primary.blue : red.red3}
          />
        </OpenBox>
      </MatchCardWrapper>

      {isOpen && <MatchDetailCard data={detailData} myName={myName} maxDamage={maxDamage} />}
    </Layout>
  );
}
