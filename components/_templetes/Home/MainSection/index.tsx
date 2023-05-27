import styled from '@emotion/styled';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

//  components
import Button from '@components/_atoms/Button';
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { SEARCH } from '@constants/routes/routes';

const Layout = styled.div`
  height: 640px;
  padding-top: 64px;

  background-color: #5383e8;
  background-image: linear-gradient(315deg, #ffffff 0%, #63a4ff 94%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 0 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;

  display: flex;
  justify-content: center;
`;

export default function MainSection() {
  const { t } = useTranslation('home');

  return (
    <Layout>
      <Content>
        <Typography size={TypoSize.H5}>{t('main.title')}</Typography>

        <ButtonWrapper>
          <Link href={SEARCH}>
            <a>
              <Button label={t('main.button')} />
            </a>
          </Link>
        </ButtonWrapper>
      </Content>
    </Layout>
  );
}
