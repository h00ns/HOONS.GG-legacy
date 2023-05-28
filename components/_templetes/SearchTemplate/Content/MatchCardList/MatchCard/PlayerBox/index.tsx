import styled from '@emotion/styled';

//  components

//  types
import { getMatchDetailData } from '@customType/match';

type Props = {
  data: getMatchDetailData['data'];
};

const Layout = styled.div``;

export default function PlayerBox({ data }: Props) {
  const { participants } = data.info ?? {};

  return <Layout></Layout>;
}
