import Badge from '@components/_atoms/Badge';
import { getSummonerInfoByNameData } from '@customType/summoner';
import styled from '@emotion/styled';
import { white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import Image from 'next/image';

type Props = {
  data: getSummonerInfoByNameData['data'];
};

const Layout = styled.div`
  padding: 24px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};

  display: flex;
`;

const ProfileWrapper = styled.div`
  position: relative;
`;

const ProfileIconWrapper = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  border-radius: ${Radius.LARGE};
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

  return (
    <Layout>
      <ProfileWrapper>
        <ProfileIconWrapper>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/10.18.1/img/profileicon/${profileIconId}.png`}
            layout="fill"
            alt="profileIcon"
          />
        </ProfileIconWrapper>
        <BadgeWrapper>
          <Badge label={summonerLevel} />
        </BadgeWrapper>
      </ProfileWrapper>
    </Layout>
  );
}
