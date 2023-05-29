import styled from '@emotion/styled';

//  constants
import { gray } from '@styles/Colors';

type Props = {
  readonly width?: string;
  readonly color?: string;
};

const Component = styled.div<Props>`
  height: 1px;
  width: ${({ width }) => width || '100%'};
  background-color: ${({ color }) => color || gray.gray3};
`;

export default function Divider({ width, color }: Props) {
  return <Component width={width} color={color} />;
}
