import Card from '@components/_atoms/Card';
import styled from '@emotion/styled';
import { FAVORITES, getCookie } from '@utils/cookie';

type Props = {};

const Layout = styled.div`
  margin-top: 12px;
`;

const Content = styled.div`
  display: grid;
  row-gap: 4px;
`;

const ContentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function FavoritesBox() {
  // const favorites = getCookie(FAVORITES);

  return (
    <Layout>
      <Card>{/* <Content>{favorites}</Content> */}</Card>
    </Layout>
  );
}
