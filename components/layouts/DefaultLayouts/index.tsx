import styled from '@emotion/styled';
import { useIsTablet } from '@hooks/responsive/useIsMobile';

//  components
import Footer from '@components/_organisms/Footer';
import Header from '@components/_organisms/Header';

//  constants
import { white } from '@styles/Colors';
import MobileHeader from '@components/_organisms/MobileHeader';

type Props = {
  readonly children: React.ReactNode;
  readonly isHome?: boolean;
};

const Layout = styled.div<{ isHome?: boolean }>`
  width: 100%;
  min-width: 320px;
  min-height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;

  background-color: #5383e8;
  background-image: linear-gradient(315deg, #ffffff 0%, #63a4ff 94%);

  /* only Home */
  ${({ isHome }) =>
    isHome &&
    `
    background: ${white}
  `}
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function DefaultLayout({ children, isHome }: Props) {
  const isTablet = useIsTablet();

  return (
    <Layout isHome={isHome}>
      {/* Header */}
      {isTablet ? <MobileHeader /> : <Header />}
      {/* Header end */}

      {/* Content */}
      <Content>{children}</Content>
      {/* Content end */}

      {/* Footer only Home */}
      {isHome && <Footer />}
      {/* Footer end */}
    </Layout>
  );
}
