import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { ForwardedRef, forwardRef } from 'react';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { gray, primary, white } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { Language } from '@constants/language';

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
  const router = useRouter();
  const locale = router.locale;

  const handleLanguageSet = (lang: Language) => {
    localStorage.setItem('language', lang);
    router.push(`/${lang}${router.asPath}`, undefined, { locale: lang });
  };

  return (
    <Layout openModal={openModal} ref={ref}>
      <LanguageItem onClick={() => handleLanguageSet(Language.KO)}>
        <Typography size={TypoSize.SH3} color={locale === Language.KO ? primary.blue : gray.gray5}>
          한국어
        </Typography>
      </LanguageItem>
      <LanguageItem onClick={() => handleLanguageSet(Language.EN)}>
        <Typography size={TypoSize.SH3} color={locale === Language.EN ? primary.blue : gray.gray5}>
          English
        </Typography>
      </LanguageItem>
    </Layout>
  );
};

export default forwardRef(LanguageModal);
