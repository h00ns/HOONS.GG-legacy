import styled from '@emotion/styled';

//  constants
import { primary } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';
import { useGetTypoSize } from '@hooks/atoms/useGetTypoSize';

type Props = {
  readonly size: TypoSize;
  readonly color?: string;
  readonly children?: React.ReactNode;
};

const Component = styled.div`
  word-break: keep-all;
  white-space: pre-line;
  letter-spacing: -2%;
`;

export default function Typography({ size, color = primary.gray, children }: Props) {
  const [fontWeight, fontSize] = useGetTypoSize(size);

  return <Component style={{ fontWeight, fontSize, color }}>{children}</Component>;
}
