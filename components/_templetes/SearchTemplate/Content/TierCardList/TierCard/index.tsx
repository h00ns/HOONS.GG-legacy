import styled from '@emotion/styled';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

//  components
import Typography from '@components/_atoms/Typography';
import Divider from '@components/_atoms/Divider';
import Card from '@components/_atoms/Card';

//  types
import { getSummonerDetailDataType } from '@customType/summoner';
import { TypoSize } from '@constants/atoms/Typography';
import { blue, gray, red } from '@styles/Colors';

//  hooks
import { useGetPercentage } from '@components/_templetes/SearchTemplate/Hooks/useGetWinRate';

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

const RecordWrapper = styled.div`
  display: flex;
  column-gap: 4px;
`;

export default function TierCard({ title, data }: Props) {
  const { t } = useTranslation('search');

  const { tier, rank, leaguePoints, wins, losses } = data ?? {};

  const total = wins && losses ? wins + losses : undefined;
  const WIN_RATE = useGetPercentage(wins, total);

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
                <RecordWrapper>
                  <Typography size={TypoSize.SH5} color={blue.blue3}>
                    {`${wins}${t('win')} `}
                  </Typography>
                  <Typography size={TypoSize.SH5} color={red.red3}>
                    {`${losses}${t('lose')} `}
                  </Typography>
                  <Typography size={TypoSize.SH5} color={gray.gray6}>
                    {`${t('win-rate')} ${WIN_RATE}%`}
                  </Typography>
                </RecordWrapper>
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
