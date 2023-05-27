import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import Typography from '@components/_atoms/Typography';
import ChampionItem from './ChampionItem';

//  constants
import { TypoSize } from '@constants/atoms/Typography';

//  hooks
import { useGetChampionLotationsFetch } from '@hooks/fetch/useLotationsFetch';

const Content = styled.div`
  max-width: 620px;
  margin: 0 auto;
  text-align: center;
`;

const ChampionList = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export default function Section0() {
  const { t } = useTranslation('home');

  const { getChampionLotationsData: lotationData } = useGetChampionLotationsFetch();
  const { freeChampionIds } = lotationData ?? {};

  return (
    <Content>
      <Typography size={TypoSize.H5}>{t('section0.title')}</Typography>

      <ChampionList>
        {freeChampionIds?.map((id) => (
          <ChampionItem id={id} key={id} />
        ))}
      </ChampionList>
    </Content>
  );
}
