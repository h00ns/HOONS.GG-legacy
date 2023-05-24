import Text from '@components/_atoms/Text';
import { TextSize } from '@constants/atoms/TextSize';
import styled from '@emotion/styled';
import { useCheckScrollToTop } from '@hooks/interaction/useCheckScrollToTop';
import { gray, white } from '@styles/Colors';
import { Shadow } from '@styles/Shadow';
import Link from 'next/link';

const Layout = styled.div<{ isHomeTop: boolean }>`
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

const LogoWrapper = styled.div`
  cursor: pointer;
`;

export default function Header() {
  const isHomeTop = useCheckScrollToTop();

  return (
    <Layout isHomeTop={isHomeTop}>
      <Link href={'/'}>
        <a>
          <LogoWrapper>
            <Text size={TextSize.SH1} color={white}>
              Hoon.gg
            </Text>
          </LogoWrapper>
        </a>
      </Link>
    </Layout>
  );
}
