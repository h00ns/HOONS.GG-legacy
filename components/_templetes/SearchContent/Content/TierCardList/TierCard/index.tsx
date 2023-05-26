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
import { getWinRate } from '@utils/winRates';
import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('search');

  const { tier, rank, leaguePoints, wins, losses } = data ?? {};

  const total = wins && losses ? wins + losses : undefined;
  const WIN_RATE = getWinRate(wins, total);

  const TierImageUrl = `/assets/images/tier/${tier ?? 'UNRANKED'}.png`;

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
                  {`${wins}${t('win')} `}
                  {`${losses}${t('lose')} `}
                  {`${t('win-rate')} ${WIN_RATE}%`}
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
