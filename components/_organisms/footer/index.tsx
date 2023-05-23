import styled from '@emotion/styled';
import { gray } from '@styles/Colors';
import { Shadow } from '@styles/Shadow';

const Layout = styled.div`
  height: 200px;
  background: ${gray.gray3};
  box-shadow: ${Shadow.MEDIUM};
`;

export default function Footer() {
  return <Layout></Layout>;
}
