import styled from '@emotion/styled';

//  constants
import { gray } from '@styles/Colors';

type Props = {
  color?: string;
};

const Component = styled.div<Props>`
  height: 1px;
  background-color: ${({ color }) => color || gray.gray3};
`;

export default function Divider({ color }: Props) {
  return <Component color={color} />;
}
