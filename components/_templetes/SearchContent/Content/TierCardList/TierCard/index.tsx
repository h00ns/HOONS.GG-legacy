import styled from '@emotion/styled';

//  components
import Card from '@components/_atoms/Card';

//  types
import { getSummonerDetailDataType } from '@customType/summoner';
import Typography from '@components/_atoms/Typography';
import { TypoSize } from '@constants/atoms/Typography';
import Image from 'next/image';

type Props = {
  title: string;
  data?: getSummonerDetailDataType;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  align-items: center;
`;

const TierImageWrapper = styled.div`
  width: 120px;
  height: 100px;
  position: relative;
`;

export default function TierCard({ title, data }: Props) {
  const { tier, rank, leaguePoints, wins, losses } = data ?? {};

  const UN_RANK = 'UNRANK';
  const TierImageUrl = `/assets/images/tier/${tier ?? UN_RANK}.png`;

  return (
    <Card>
      <Content>
        <TierImageWrapper>
          <Image src={TierImageUrl} layout="fill" alt="tier" />
        </TierImageWrapper>
        <Typography size={TypoSize.SH3}>{title}</Typography>
      </Content>
    </Card>
  );
}
