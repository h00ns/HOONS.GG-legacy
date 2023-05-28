import styled from '@emotion/styled';

//  components
import PlayerItem from './PlayerItem';

//  types
import { getMatchDetailData } from '@customType/match';

type Props = {
  data: getMatchDetailData['data'];
  myName?: string;
};

const Layout = styled.div`
  display: flex;
  column-gap: 12px;
`;

const PlayerList = styled.div`
  display: grid;
  row-gap: 4px;
`;

export default function PlayerBox({ data, myName }: Props) {
  const { participants } = data.info ?? {};
  const leftTeam = participants.filter((item) => item.teamId === 100);
  const rightTeam = participants.filter((item) => item.teamId === 200);

  return (
    <Layout>
      <PlayerList>
        {leftTeam.map((playerData) => (
          <PlayerItem data={playerData} myName={myName} key={playerData.summonerName} />
        ))}
      </PlayerList>
      <PlayerList>
        {rightTeam.map((playerData) => (
          <PlayerItem data={playerData} myName={myName} key={playerData.summonerName} />
        ))}
      </PlayerList>
    </Layout>
  );
}
