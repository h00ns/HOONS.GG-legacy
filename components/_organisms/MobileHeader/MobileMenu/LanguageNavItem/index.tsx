import styled from '@emotion/styled';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

//  components
import Icon from '@components/_atoms/Icon';
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { blue, gray, primary } from '@styles/Colors';
import { Language } from '@constants/language';

const Layout = styled.div``;

const Title = styled.div`
  padding: 0 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const LeftBox = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

const Content = styled.div`
  padding: 24px 24px 24px 60px;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const LanguageItem = styled.div<{ select?: boolean }>`
  padding: 8px;
  display: flex;
  align-items: center;
  flex: 1;
  cursor: pointer;

  ${({ select }) =>
    select &&
    `
    background:${blue.blue1}
  `}
`;

export default function LanguageNavItem() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const locale = router.locale;

  const [isOpen, setIsOpen] = useState(false);

  const handleChangeIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLanguageSet = (lang: Language) => {
    localStorage.setItem('language', lang);
    router.push(`/${lang}${router.asPath}`, undefined, { locale: lang });
  };

  return (
    <Layout>
      <Title onClick={handleChangeIsOpen}>
        <LeftBox>
          <Icon name="global" fill={primary.gray} />
          <Typography size={TypoSize.SH3}>{t('menu2')}</Typography>
        </LeftBox>

        <Icon name={isOpen ? 'arrow-up' : 'arrow-down'} fill={gray.gray6} />
      </Title>

      {isOpen && (
        <Content>
          <LanguageItem onClick={() => handleLanguageSet(Language.KO)} select={locale === Language.KO}>
            <Typography size={TypoSize.B2} color={locale === Language.KO ? primary.blue : gray.gray5}>
              한국어
            </Typography>
          </LanguageItem>
          <LanguageItem onClick={() => handleLanguageSet(Language.EN)} select={locale === Language.EN}>
            <Typography size={TypoSize.B2} color={locale === Language.EN ? primary.blue : gray.gray5}>
              English
            </Typography>
          </LanguageItem>
        </Content>
      )}
    </Layout>
  );
}
