import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { gray, red, white } from '@styles/Colors';

//  types
import { DamageType } from '@components/_templetes/SearchTemplate/types';
import { Radius } from '@styles/Radius';

//  hooks
import { useGetPercentage } from '@components/_templetes/SearchTemplate/Hooks/useGetWinRate';

//  utils
import { returnNumberWithComma } from '@utils/regex';
import { mq } from '@utils/style';

type Props = {
  damage: DamageType;
  maxDamage: DamageType;
};

const Layout = styled.div`
  padding: 12px;
  text-align: center;

  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const DamageItemWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

const DamageItem = styled.div``;

const DamageStickWrapper = styled.div`
  height: 8px;
  width: 75px;
  margin-top: 4px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  overflow: hidden;

  position: relative;
`;

const DamageStick = styled.div<{ width: string; background: string }>`
  width: ${({ width }) => width};
  background: ${({ background }) => background};
  height: 100%;
`;

export default function DamageBox({ damage, maxDamage }: Props) {
  const { t } = useTranslation('search');

  const { deal, taken } = damage;
  const { deal: maxDeal, taken: maxTaken } = maxDamage;

  const dealStickPercent = useGetPercentage(deal, maxDeal) + '%';
  const takenStickPercent = useGetPercentage(taken, maxTaken) + '%';

  return (
    <Layout>
      <Typography size={TypoSize.B4} color={gray.gray6}>
        {t('damage')}
      </Typography>
      <DamageItemWrapper>
        <DamageItem>
          <Typography size={TypoSize.B5} color={gray.gray6}>
            {returnNumberWithComma(deal)}
          </Typography>
          <DamageStickWrapper>
            <DamageStick width={dealStickPercent} background={red.red3} />
          </DamageStickWrapper>
        </DamageItem>
        <DamageItem>
          <Typography size={TypoSize.B5} color={gray.gray6}>
            {returnNumberWithComma(taken)}
          </Typography>
          <DamageStickWrapper>
            <DamageStick width={takenStickPercent} background={gray.gray6} />
          </DamageStickWrapper>
        </DamageItem>
      </DamageItemWrapper>
    </Layout>
  );
}
