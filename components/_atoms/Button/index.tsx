import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
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

const Component = styled.button<CssProps>`
  width: ${({ width }) => width};
  padding: 12px 23px;
  border: none;
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
    <Component width={width} onClick={onClick}>
      <Typography size={TypoSize.SH3}>{label}</Typography>
    </Component>
  );
}
