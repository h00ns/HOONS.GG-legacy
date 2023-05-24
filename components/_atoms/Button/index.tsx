import styled from '@emotion/styled';
import Text from '@components/_atoms/Text';
import { TextSize } from '@constants/atoms/TextSize';
import { Radius } from '@styles/Radius';
import { primary } from '@styles/Colors';

type Props = {
  readonly width?: string;
  readonly label?: string;
  readonly onClick?: () => void;
};

type CssProps = {
  readonly width?: string;
};

const Layout = styled.div<CssProps>`
  padding: 12px 23px;
  border-radius: ${Radius.MEDIUM};
  background-color: ${primary.blue};
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export default function Button({ width, label, onClick }: Props) {
  return (
    <Layout width={width} onClick={onClick}>
      <Text size={TextSize.SH3}>{label}</Text>
    </Layout>
  );
}
