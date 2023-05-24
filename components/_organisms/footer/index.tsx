import styled from '@emotion/styled';
import NextLink from '@components/_atoms/NextLink';

//  components
import Text from '@components/_atoms/Text';

//  constants
import { mq } from '@utils/style';
import { TextSize } from '@constants/atoms/TextSize';
import { Shadow } from '@styles/Shadow';
import { gray } from '@styles/Colors';
import { GITHUB, SNS, VELOG } from '@constants/routes/routes';

const Layout = styled.div`
  width: 100%;
  min-height: 200px;
  padding: 24px;
  background: ${gray.gray1};
  box-shadow: ${Shadow.MEDIUM};

  ${mq['md']} {
    padding: 48px 24px;
  }
`;

const Content = styled.div`
  max-width: 1160px;
  margin: 0 auto;

  display: flex;
  column-gap: 128px;
  flex-wrap: wrap;
  row-gap: 24px;

  ${mq['md']} {
    flex-direction: column;
  }
`;

const FooterBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Bold = styled.span`
  font-weight: bold;
`;

export default function Footer() {
  return (
    <Layout>
      <Content>
        <FooterBlock>
          <Text size={TextSize.SH1}>HOONS.GG</Text>
          <Text size={TextSize.B4} color={gray.gray7}>
            궁금하신 점은 언제나 아래의 연락처 혹은 이메일로 연락 바랍니다.
          </Text>
          <Text size={TextSize.B3} color={gray.gray7}>
            <Bold>Phone</Bold> : 010-5240-5583
          </Text>
          <Text size={TextSize.B3} color={gray.gray7}>
            <Bold>Email</Bold> : 01052405583a@gmail.com
          </Text>
        </FooterBlock>
        <FooterBlock>
          <Text size={TextSize.SH1}>Github</Text>
          <NextLink href={GITHUB} blank>
            <Text size={TextSize.B4} color={gray.gray7}>
              Visit
            </Text>
          </NextLink>
        </FooterBlock>
        <FooterBlock>
          <Text size={TextSize.SH1}>Velog</Text>
          <NextLink href={VELOG} blank>
            <Text size={TextSize.B4} color={gray.gray7}>
              Visit
            </Text>
          </NextLink>
        </FooterBlock>
        <FooterBlock>
          <Text size={TextSize.SH1}>SNS</Text>
          <NextLink href={SNS} blank>
            <Text size={TextSize.B4} color={gray.gray7}>
              Visit
            </Text>
          </NextLink>
        </FooterBlock>
      </Content>
    </Layout>
  );
}
