import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import TierCard from './TierCard';

//  constants
import { mq } from '@utils/style';

//  types
import { getSummonerDetailData } from '@customType/summoner';
import { RankType } from '@constants/data';
import { useGetSummonerDetailFetch } from '@hooks/fetch/useSummonerFetch';

type Props = {
  id?: string;
};

const Layout = styled.div`
  margin-top: 8px;

  display: flex;
  column-gap: 12px;

  ${mq['md']} {
    flex-direction: column;
    row-gap: 8px;
  }
`;

export default function TierCardList({ id }: Props) {
  const { t } = useTranslation('search');

  const { getSummonerDetailData: summonerDetailData } = useGetSummonerDetailFetch({ id });

  const soloData = summonerDetailData?.filter((item) => item.queueType === RankType.SOLO)[0];
  const flexData = summonerDetailData?.filter((item) => item.queueType === RankType.FLEX)[0];

  return (
    <Layout>
      {/* Solo Rank */}
      <TierCard title={t('solo-rank')} data={soloData} />
      {/* Solo Rank end */}

      {/* 5x5 Rank */}
      <TierCard title={t('flex-rank')} data={flexData} />
      {/* 5x5 Rank end */}
    </Layout>
  );
}
