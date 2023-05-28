import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//  components
import Card from '@components/_atoms/Card';
import Icon from '@components/_atoms/Icon';
import FavoritesUser from './FavoritesUser';

//  constants
import { IconSize } from '@constants/atoms/Icon';
import { red } from '@styles/Colors';
import { FAVORITES, getCookie } from '@utils/cookie';

const Layout = styled.div`
  margin-top: 36px;
`;

const Content = styled.div`
  display: grid;
  row-gap: 4px;

  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: -42px;
`;

export default function FavoritesBox() {
  const router = useRouter();
  const { name } = router.query;

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const favorites: string[] = getCookie(FAVORITES);

    if (favorites) {
      setFavorites(favorites);
    }
  }, []);

  if (name) {
    return null;
  } else {
    // only undefined name
    return (
      <Layout>
        <Card>
          <Content>
            <IconWrapper>
              <Icon name="favorite" size={IconSize.MEDIUM} fill={red.red3} />
            </IconWrapper>
            {favorites.map((userName) => (
              <FavoritesUser name={userName} favorites={favorites} setFavorites={setFavorites} key={userName} />
            ))}
          </Content>
        </Card>
      </Layout>
    );
  }
}
