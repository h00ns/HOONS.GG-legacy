import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { white } from '@styles/Colors';

//  hooks
import { useIsMobile } from '@hooks/responsive/useIsMobile';

const Layout = styled.div`
  text-align: center;
`;

export default function Title() {
  const isTablet = useIsMobile();

  return (
    <Layout>
      <Typography size={isTablet ? TypoSize.H5 : TypoSize.H2} color={white}>
        HOONS.GG
      </Typography>
    </Layout>
  );
}
