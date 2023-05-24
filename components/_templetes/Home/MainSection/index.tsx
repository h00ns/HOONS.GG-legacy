import Button from '@components/_atoms/Button';
import Text from '@components/_atoms/Text';
import { TextSize } from '@constants/atoms/TextSize';
import styled from '@emotion/styled';
import { gray, white } from '@styles/Colors';
import { mq } from '@utils/style';
import Link from 'next/link';

const Layout = styled.div`
  height: 1080px;
  padding-top: 64px;

  background-color: #5383e8;
  background-image: linear-gradient(315deg, #ffffff 0%, #63a4ff 94%);

  display: flex;
  justify-content: center;
  align-items: center;

  ${mq['sm']} {
    height: 640px;
  }
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
  return (
    <Layout>
      <Content>
        <Text size={TextSize.SH1}>Hoon.gg는 League of Legend 전적 검색 플랫폼입니다.</Text>

        <ButtonWrapper>
          <Link href="/search">
            <a>
              <Button label="서비스 이용하기" />
            </a>
          </Link>
        </ButtonWrapper>
      </Content>
    </Layout>
  );
}
