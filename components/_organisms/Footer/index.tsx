import styled from '@emotion/styled';
import NextLink from '@components/_atoms/NextLink';
import Image from 'next/image';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { mq } from '@utils/style';
import { TypoSize } from '@constants/atoms/Typography';
import { Shadow } from '@styles/Shadow';
import { gray } from '@styles/Colors';
import { GITHUB, SNS, VELOG } from '@constants/routes/routes';
import { Radius } from '@styles/Radius';

const Layout = styled.div`
  width: 100%;
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
  row-gap: 24px;
`;

const ImageList = styled.div`
  display: flex;
  column-gap: 12px;
`;

const ImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: ${Radius.MAXIMUM};
  overflow: hidden;
`;

export default function Footer() {
  return (
    <Layout>
      <Content>
        <FooterBlock>
          <Typography size={TypoSize.SH1}>HOONS.GG</Typography>
          <ImageList>
            <NextLink href={GITHUB} blank>
              <ImageWrapper>
                <Image src={'/assets/images/icons/Github.png'} layout="fill" alt="github" />
              </ImageWrapper>
            </NextLink>
            <NextLink href={SNS} blank>
              <ImageWrapper>
                <Image src={'/assets/images/icons/Insta.png'} layout="fill" alt="github" />
              </ImageWrapper>
            </NextLink>
            <NextLink href={VELOG} blank>
              <ImageWrapper>
                <Image src={'/assets/images/icons/Velog.png'} layout="fill" alt="github" />
              </ImageWrapper>
            </NextLink>
          </ImageList>
          <Typography size={TypoSize.B5} color={gray.gray6}>
            © 2023 HOONS.GG. HOONS.GG isn’t endorsed by Riot Games and doesn’t reflect the views or opinions of Riot
            Games or anyone officially involved in producing or managing League of Legends. League of Legends and Riot
            Games are trademarks or registered trademarks of Riot Games, Inc. League of Legends © Riot Games, Inc.
          </Typography>
        </FooterBlock>
      </Content>
    </Layout>
  );
}
