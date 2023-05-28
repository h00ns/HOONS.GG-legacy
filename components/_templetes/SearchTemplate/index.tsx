import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';
import SearchForm from './SearchForm';
import Content from './Content';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { white } from '@styles/Colors';

//  hooks
import { useIsMobile } from '@hooks/responsive/useIsMobile';

const Layout = styled.div``;

const Title = styled.div`
  text-align: center;
`;

export default function SearchTemplate() {
  const isTablet = useIsMobile();

  return (
    <Layout>
      <Title>
        <Typography size={isTablet ? TypoSize.H5 : TypoSize.H2} color={white}>
          HOONS.GG
        </Typography>
      </Title>

      <SearchForm />
      <Content />
    </Layout>
  );
}
