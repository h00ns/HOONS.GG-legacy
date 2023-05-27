import styled from '@emotion/styled';
import Image from 'next/image';

//  components
import Badge from '@components/_atoms/Badge';
import Card from '@components/_atoms/Card';
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  types
import { getSummonerInfoByNameData } from '@customType/summoner';

type Props = {
  data: getSummonerInfoByNameData['data'];
};

const Content = styled.div`
  display: flex;
  column-gap: 24px;
`;

const ProfileWrapper = styled.div`
  position: relative;
`;

const ProfileIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: ${Radius.LARGE};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;
`;

const BadgeWrapper = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, 0%);
`;

export default function SummonerInfoCard({ data }: Props) {
  const { name, profileIconId, summonerLevel } = data;

  /**
   *  @todo
   *  localStorage 즐겨찾기
   */

  return (
    <Card>
      <Content>
        <ProfileWrapper>
          <ProfileIconWrapper>
            <Image
              src={`https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/profile-icons/${profileIconId}.jpg`}
              layout="fill"
              alt="profileIcon"
            />
          </ProfileIconWrapper>
          <BadgeWrapper>
            <Badge label={summonerLevel} />
          </BadgeWrapper>
        </ProfileWrapper>
        <Typography size={TypoSize.SH2}>{name}</Typography>
      </Content>
    </Card>
  );
}
