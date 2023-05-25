import styled from '@emotion/styled';

//  components
import Button from '@components/_atoms/Button';
import Typography from '@components/_atoms/Typography';
import Icon from '@components/_atoms/Icon';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { useRouter } from 'next/router';
import { IconSize } from '@constants/atoms/Icon';
import { gray, red } from '@styles/Colors';

const Layout = styled.div`
  text-align: center;
`;

const TextWrapper = styled.div`
  margin-top: 24px;

  display: grid;
  row-gap: 12px;
`;

const ButtonWrapper = styled.div`
  margin-top: 104px;

  display: flex;
  justify-content: center;
`;

export default function ErrorContent() {
  const router = useRouter();

  return (
    <Layout>
      <Icon size={IconSize.MAXIMUM} name="error" fill={red.red3} />
      <TextWrapper>
        <Typography size={TypoSize.SH1}>존재하지 않는 페이지 입니다.</Typography>
        <Typography size={TypoSize.B2} color={gray.gray7}>
          이전페이지나 홈으로 이동해주세요.
        </Typography>
      </TextWrapper>
      <ButtonWrapper>
        <Button label="이전으로" onClick={() => router.back()} />
      </ButtonWrapper>
    </Layout>
  );
}
