import styled from '@emotion/styled';
import { useGetTextSize } from '@hooks/atoms/useGetTextSize';
import { primary } from '@styles/Colors';
import { TextSize } from '@constants/atoms/TextSize';

type Props = {
  readonly size: TextSize;
  readonly color?: string;
  readonly children?: React.ReactNode;
};

type CssProps = {
  fontWeight: number;
  fontSize: string;
  color: string;
};

const Layout = styled.div<CssProps>`
  word-break: keep-all;
  white-space: pre-line;
  letter-spacing: -2%;
`;

export default function Text({ size, color = primary.gray, children }: Props) {
  const [fontWeight, fontSize] = useGetTextSize(size);

  return (
    <Layout fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </Layout>
  );
}
