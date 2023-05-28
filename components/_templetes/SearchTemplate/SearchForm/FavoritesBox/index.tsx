import styled from '@emotion/styled';
import { useRouter } from 'next/router';

//  components
import Card from '@components/_atoms/Card';
import Typography from '@components/_atoms/Typography';
import Icon from '@components/_atoms/Icon';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { IconSize } from '@constants/atoms/Icon';
import { gray, red } from '@styles/Colors';
import { FAVORITES, getCookie } from '@utils/cookie';
import { useEffect, useState } from 'react';

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

const ContentItem = styled.div`
  padding: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function FavoritesBox() {
  const router = useRouter();
  const { name } = router.query;

  const [favoritesUsers, setFavoritesUsers] = useState<string[]>([]);

  useEffect(() => {
    const favorites = getCookie(FAVORITES);

    if (favorites) setFavoritesUsers(favorites);
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
            {favoritesUsers.map((userName) => (
              <ContentItem key={userName}>
                <Typography size={TypoSize.B3} color={gray.gray6}>
                  {userName}
                </Typography>
              </ContentItem>
            ))}
          </Content>
        </Card>
      </Layout>
    );
  }
}
