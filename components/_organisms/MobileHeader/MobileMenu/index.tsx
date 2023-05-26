import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

//  components
import Logo from '../Logo';
import Icon from '@components/_atoms/Icon';
import NextLink from '@components/_atoms/NextLink';
import Typography from '@components/_atoms/Typography';
import Divider from '@components/_atoms/Divider';
import LanguageNavItem from './LanguageNavItem';

//  constants
import { primary, white } from '@styles/Colors';
import { SEARCH } from '@constants/routes/routes';
import { TypoSize } from '@constants/atoms/Typography';

type Props = {
  handleCloseMenu: () => void;
};

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: ${white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;

  width: 100%;
  height: 64px;
`;

const IconWrapper = styled.div``;

const Content = styled.div`
  width: 100%;
  padding: 24px;

  display: grid;
  row-gap: 24px;
`;

const NavItem = styled.div`
  padding: 0 24px;

  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export default function MobileMenu({ handleCloseMenu }: Props) {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <Logo />
        <IconWrapper onClick={handleCloseMenu}>
          <Icon name="close" fill={primary.gray} />
        </IconWrapper>
      </Head>

      <Content>
        <Divider />

        <NextLink href={SEARCH}>
          <NavItem>
            <Icon name="search" stroke={primary.gray} />
            <Typography size={TypoSize.SH3}>{t('menu1')}</Typography>
          </NavItem>
        </NextLink>

        <Divider />

        <LanguageNavItem />

        <Divider />
      </Content>
    </Layout>
  );
}
