import styled from '@emotion/styled';

//  components
import Logo from './Logo';
import LanguageBox from './LanguageBox';

//  constants
import { gray, white } from '@styles/Colors';
import { Shadow } from '@styles/Shadow';

//  hooks
import { useCheckScrollToTop } from '@hooks/interaction/useCheckScrollToTop';

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

export default function Header() {
  const isHomeTop = useCheckScrollToTop();

  return (
    <Layout isHomeTop={isHomeTop}>
      <Logo isHomeTop={isHomeTop} />
      <LanguageBox isHomeTop={isHomeTop} />
    </Layout>
  );
}
