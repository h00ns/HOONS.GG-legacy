import styled from '@emotion/styled';

//  components

//  constants
import { blue, red, white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  types
import { getMatchDetailData } from '@customType/match';
import PlayerRow from './PlayerRow';

type Props = {
  data: getMatchDetailData['data'];
  myName?: string;
};

const Layout = styled.div`
  margin-top: 4px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;

  display: flex;
  flex-direction: column;
`;

const TeamBox = styled.div<{ win: boolean }>`
  padding: 8px;
  background: ${blue.blue2};

  ${({ win }) =>
    !win &&
    `
    background: ${red.red1};
  `}
`;

export default function DetailCard({ data, myName }: Props) {
  const { participants } = data.info ?? {};
  const leftTeam = participants.filter((item) => item.teamId === 100);
  const rightTeam = participants.filter((item) => item.teamId === 200);

  return (
    <Layout>
      <TeamBox win={leftTeam[0].win}>
        {leftTeam.map((playerData) => (
          <PlayerRow data={playerData} myName={myName} key={playerData.summonerName} />
        ))}
      </TeamBox>
      <TeamBox win={rightTeam[0].win}>
        {rightTeam.map((playerData) => (
          <PlayerRow data={playerData} myName={myName} key={playerData.summonerName} />
        ))}
      </TeamBox>
    </Layout>
  );
}
