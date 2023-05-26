import styled from '@emotion/styled';
import NextLink from '@components/_atoms/NextLink';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { mq } from '@utils/style';
import { TypoSize } from '@constants/atoms/Typography';
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
          <Typography size={TypoSize.SH1}>HOONS.GG</Typography>
          <Typography size={TypoSize.B4} color={gray.gray7}>
            궁금하신 점은 언제나 아래의 연락처 혹은 이메일로 연락 바랍니다.
          </Typography>
          <Typography size={TypoSize.B3} color={gray.gray7}>
            <Bold>Phone</Bold> : 010-5240-5583
          </Typography>
          <Typography size={TypoSize.B3} color={gray.gray7}>
            <Bold>Email</Bold> : 01052405583a@gmail.com
          </Typography>
        </FooterBlock>
        <FooterBlock>
          <Typography size={TypoSize.SH1}>Github</Typography>
          <NextLink href={GITHUB} blank>
            <Typography size={TypoSize.B4} color={gray.gray7}>
              Visit
            </Typography>
          </NextLink>
        </FooterBlock>
        <FooterBlock>
          <Typography size={TypoSize.SH1}>Velog</Typography>
          <NextLink href={VELOG} blank>
            <Typography size={TypoSize.B4} color={gray.gray7}>
              Visit
            </Typography>
          </NextLink>
        </FooterBlock>
        <FooterBlock>
          <Typography size={TypoSize.SH1}>SNS</Typography>
          <NextLink href={SNS} blank>
            <Typography size={TypoSize.B4} color={gray.gray7}>
              Visit
            </Typography>
          </NextLink>
        </FooterBlock>
      </Content>
    </Layout>
  );
}
