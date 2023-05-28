import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { gray, red } from '@styles/Colors';

//  hooks
import { useGetKdaAvg } from '@components/_templetes/SearchTemplate/Hooks/useGetKdaAvg';

//  types
import { ParticipantsType } from '@customType/match';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;

const HighLightRed = styled.span`
  color: ${red.red3};
`;

export default function KdaBox({ data }: Props) {
  const { kills, deaths, assists } = data ?? {};
  const avg = useGetKdaAvg(kills, deaths, assists);

  return (
    <Layout>
      <Typography size={TypoSize.SH4}>
        {kills} / <HighLightRed>{deaths}</HighLightRed> / {assists}
      </Typography>
      <Typography size={TypoSize.B5} color={gray.gray6}>
        {avg} 평점
      </Typography>
    </Layout>
  );
}
