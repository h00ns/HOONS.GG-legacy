import styled from '@emotion/styled';

//  components

//  constants
import { gray, white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

type Props = {
  readonly name?: string;
  readonly value?: string;
  readonly placeholder?: string;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Component = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 16px;
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  border: 1px solid ${gray.gray4};
  background: ${white};

  &:focus {
    outline: none;
  }
`;

export default function TextInput({ name, value, placeholder, onChange }: Props) {
  return <Component name={name} value={value} placeholder={placeholder} onChange={onChange} />;
}
