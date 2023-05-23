import Footer from '@components/_organisms/footer';
import Header from '@components/_organisms/header';
import styled from '@emotion/styled';
import { primary } from '@styles/Colors';

type Props = {
  readonly children: React.ReactNode;
};

const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: stretch;

  background: ${primary.blue};
`;

const Content = styled.div`
  width: 100%;
  flex: 1;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  position: relative;
`;

export default function DefaultLayout({ children }: Props) {
  return (
    <Layout>
      {/* Header */}
      <Header />
      {/* Header end */}

      {/* Content */}
      <Content>{children}</Content>
      {/* Content end */}

      {/* Footer */}
      <Footer />
      {/* Footer end */}
    </Layout>
  );
}
