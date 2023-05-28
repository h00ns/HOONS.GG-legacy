import styled from '@emotion/styled';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

//  components
import Icon from '@components/_atoms/Icon';
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { gray } from '@styles/Colors';
import { searchPath } from '@constants/routes/routes';
import { FAVORITES, setCookie } from '@utils/cookie';

type Props = {
  name: string;
  favorites: string[];
  setFavorites: Dispatch<SetStateAction<string[]>>;
};

const Layout = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${gray.gray2};
  }
`;

const IconWrapper = styled.div``;

export default function FavoritesUser({ name, favorites, setFavorites }: Props) {
  const router = useRouter();
  const SEARCH = searchPath.query({ name });

  // 즐겨찾기 user 검색페이지로 이동
  const goSearchPage = () => {
    router.push(SEARCH);
  };

  // 즐겨찾기 삭제
  const handleDeleteFavoriteUser = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const updateFavorites = favorites.filter((summonerName) => summonerName !== name);
    setFavorites(updateFavorites);
    setCookie(FAVORITES, updateFavorites);
  };

  return (
    <Layout onClick={goSearchPage}>
      <Typography size={TypoSize.B3} color={gray.gray6}>
        {name}
      </Typography>
      <IconWrapper onClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteFavoriteUser(e)}>
        <Icon name="close" fill={gray.gray4} />
      </IconWrapper>
    </Layout>
  );
}
