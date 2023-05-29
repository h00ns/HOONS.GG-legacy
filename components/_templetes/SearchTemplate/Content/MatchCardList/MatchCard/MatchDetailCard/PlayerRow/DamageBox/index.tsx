import Typography from '@components/_atoms/Typography';
import { TypoSize } from '@constants/atoms/Typography';
import styled from '@emotion/styled';
import { gray } from '@styles/Colors';

type Props = {
  deal: number;
  taken: number;
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

export default function DamageBox({ deal, taken }: Props) {
  return (
    <Layout>
      <Typography size={TypoSize.B4} color={gray.gray6}>
        피해량
      </Typography>
      <DamageItemWrapper>
        <DamageItem>
          <Typography size={TypoSize.B5} color={gray.gray6}>
            {deal}
          </Typography>
        </DamageItem>
        <DamageItem>
          <Typography size={TypoSize.B5} color={gray.gray6}>
            {taken}
          </Typography>
        </DamageItem>
      </DamageItemWrapper>
    </Layout>
  );
}
