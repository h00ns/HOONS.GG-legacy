import styled from '@emotion/styled';

//  components
import Card from '@components/_atoms/Card';

//  types
import { getSummonerDetailDataType } from '@customType/summoner';
import Typography from '@components/_atoms/Typography';
import { TypoSize } from '@constants/atoms/Typography';
import Image from 'next/image';
import Divider from '@components/_atoms/Divider';
import { gray } from '@styles/Colors';

type Props = {
  title: string;
  data?: getSummonerDetailDataType;
};

const Content = styled.div`
  display: grid;
  row-gap: 8px;
`;

const InfoWrapper = styled.div`
  display: flex;
  column-gap: 24px;
`;

const TierImageWrapper = styled.div`
  width: 120px;
  height: 100px;
  position: relative;
`;

const DescriptionWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  row-gap: 4px;
  justify-content: center;
`;

export default function TierCard({ title, data }: Props) {
  const { tier, rank, leaguePoints, wins, losses } = data ?? {};
  const avg = Math.floor((wins! / (wins! + losses!)) * 100);

  const UN_RANK = 'UNRANK';
  const TierImageUrl = `/assets/images/tier/${tier ?? UN_RANK}.png`;

  return (
    <Card>
      <Content>
        <Typography size={TypoSize.B4}>{title}</Typography>
        <Divider />

        <InfoWrapper>
          <TierImageWrapper>
            <Image src={TierImageUrl} layout="fill" alt="tier" />
          </TierImageWrapper>
          <DescriptionWrapper>
            {tier ? (
              <>
                <Typography size={TypoSize.SH2}>
                  {tier} {rank}
                </Typography>
                <Typography size={TypoSize.B3} color={gray.gray6}>
                  {leaguePoints} LP
                </Typography>
                <Typography size={TypoSize.B5} color={gray.gray6}>
                  {wins}승 {losses}패 승률 {avg}%
                </Typography>
              </>
            ) : (
              // only UNRANKED
              <Typography size={TypoSize.B3} color={gray.gray6}>
                UNRANKED
              </Typography>
            )}
          </DescriptionWrapper>
        </InfoWrapper>
      </Content>
    </Card>
  );
}
