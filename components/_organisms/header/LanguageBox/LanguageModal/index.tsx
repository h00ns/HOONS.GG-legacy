import Text from '@components/_atoms/Text';
import { TextSize } from '@constants/atoms/TextSize';
import styled from '@emotion/styled';
import { gray, primary, white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef } from 'react';

type Props = {
  openModal: boolean;
};

const Layout = styled.div<{ openModal: boolean }>`
  width: 100%;
  padding: 24px;
  background: ${white};
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  position: absolute;
  top: 64px;

  display: none;

  ${({ openModal }) =>
    openModal &&
    `
    display: flex;
    flex-direction: column;
  `}

  width: 120px;
  height: 108px;

  top: 64px;
  right: 24px;
`;

const LanguageItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

const LanguageModal = ({ openModal }: Props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Layout openModal={openModal} ref={ref}>
      <LanguageItem>
        <Text size={TextSize.SH3} color={primary.blue}>
          한국어
        </Text>
      </LanguageItem>
      <LanguageItem>
        <Text size={TextSize.SH3} color={gray.gray5}>
          English
        </Text>
      </LanguageItem>
    </Layout>
  );
};

export default forwardRef(LanguageModal);
