import styled from '@emotion/styled';

//  constants
import { white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

type Props = {
  readonly height?: string;
  readonly children?: React.ReactNode;
};

const Layout = styled.div`
  width: 100%;
  padding: 24px;
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  background-color: ${white};
`;

export default function Card({ height, children }: Props) {
  return <Layout style={{ height }}>{children}</Layout>;
}
