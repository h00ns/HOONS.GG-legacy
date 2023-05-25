import styled from '@emotion/styled';

//  components
import Typography from '../Typography';

//  constants
import { primary, white } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';
import { Radius } from '@styles/Radius';

type Props = {
  label: string | number;
};

const Layout = styled.div`
  padding: 4px 8px;
  background: ${primary.gray};
  border-radius: ${Radius.MEDIUM};
`;

export default function Badge({ label }: Props) {
  return (
    <Layout>
      <Typography size={TypoSize.SH5} color={white}>
        {label}
      </Typography>
    </Layout>
  );
}
