import styled from '@emotion/styled';
import Typography from '@components/_atoms/Typography';
import { TypoSize } from '@constants/atoms/Typography';
import { Radius } from '@styles/Radius';
import { primary } from '@styles/Colors';
import { ButtonType } from '@constants/atoms/Button';

type Props = {
  readonly width?: string;
  readonly label?: string;
  readonly type?: ButtonType;
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
      <Typography size={TypoSize.SH3}>{label}</Typography>
    </Layout>
  );
}
