import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { gray } from '@styles/Colors';

//  types
import { ParticipantsType } from '@customType/match';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div``;

export default function MatchInfoBox({ data }: Props) {
  const { win } = data ?? {};

  return (
    <Layout>
      <Typography size={TypoSize.B4} color={gray.gray6}>
        {win ? '승리' : '패배'}
      </Typography>
    </Layout>
  );
}
