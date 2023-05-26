import styled from '@emotion/styled';

//  hooks
import { useCheckScrollToTop } from '@hooks/interaction/useCheckScrollToTop';
import { gray, primary, white } from '@styles/Colors';
import { Shadow } from '@styles/Shadow';
import Logo from './Logo';
import { useState } from 'react';
import Icon from '@components/_atoms/Icon';
import MobileMenu from './MobileMenu';

const Layout = styled.div<{ isHomeTop: boolean }>`
  min-width: 320px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  z-index: 999;
  background-color: transparent;
  background: transparent;

  transition: all 0.1s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: space-between;

  /* scroll */
  ${(props) =>
    !props.isHomeTop &&
    `
    background: ${white};
    box-shadow: ${Shadow.MEDIUM};
    border-bottom: 1px solid ${gray.gray2};
  `}
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

export default function MobileHeader() {
  const isHomeTop = useCheckScrollToTop();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Layout isHomeTop={isHomeTop}>
        <Logo isHomeTop={isHomeTop} />
        <IconWrapper onClick={handleChangeMenu}>
          <Icon name="menu" fill={isHomeTop ? white : primary.gray} />
        </IconWrapper>
      </Layout>

      {/* Menu */}
      {menuOpen && <MobileMenu handleCloseMenu={handleChangeMenu} />}
      {/* Menu end */}
    </>
  );
}
