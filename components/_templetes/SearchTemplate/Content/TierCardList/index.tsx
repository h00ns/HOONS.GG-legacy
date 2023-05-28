import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import TierCard from './TierCard';

//  constants
import { mq } from '@utils/style';

//  types
import { RankType } from '@constants/service';
import { useGetSummonerDetailFetch } from '@hooks/fetch/useSummonerFetch';

type Props = {
  id?: string;
};

const Layout = styled.div`
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

  const soloData = summonerDetailData?.find((item) => item.queueType === RankType.SOLO);
  const flexData = summonerDetailData?.find((item) => item.queueType === RankType.FLEX);

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
