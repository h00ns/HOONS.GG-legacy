import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { Time } from '@utils/time';
import { useTranslation } from 'next-i18next';

//  components
import Badge from '@components/_atoms/Badge';
import Card from '@components/_atoms/Card';
import Typography from '@components/_atoms/Typography';
import Button from '@components/_atoms/Button';
import Icon from '@components/_atoms/Icon';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { gray, red } from '@styles/Colors';

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

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const SummonerName = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const IconWrapper = styled.div`
  cursor: pointer;

  position: relative;
  top: 2px;
`;

export default function SummonerInfoCard({ data }: Props) {
  const { t } = useTranslation('search');
  const { name, profileIconId, summonerLevel, revisionDate } = data;

  const [isLike, setIsLike] = useState(false);

  const handleChangeIsLike = () => {
    setIsLike((prev) => !prev);
  };

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

        <RightBox>
          <SummonerName>
            <Typography size={TypoSize.SH2}>{name}</Typography>
            <IconWrapper onClick={handleChangeIsLike}>
              {isLike ? <Icon name="favorite" fill={red.red3} /> : <Icon name="favorite-empty" stroke={gray.gray7} />}
            </IconWrapper>
          </SummonerName>

          <Button label={t('update-button')} onClick={() => location.reload()} />

          <Typography size={TypoSize.B5} color={gray.gray6}>
            {t('recent-access')} : {Time(revisionDate).format('YYYY-MM-DD')}
          </Typography>
        </RightBox>
      </Content>
    </Card>
  );
}
