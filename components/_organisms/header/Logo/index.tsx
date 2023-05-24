import styled from '@emotion/styled';

/**
 *  Components
 */
//  atoms
import NextLink from '@components/_atoms/NextLink';
import Text from '@components/_atoms/Text';

//  constants
import { TextSize } from '@constants/atoms/TextSize';
import { primary, white } from '@styles/Colors';
import { HOME } from '@constants/routes/routes';

type Props = {
  isHomeTop: boolean;
};

const LogoWrapper = styled.div`
  cursor: pointer;
`;

export default function Logo({ isHomeTop }: Props) {
  return (
    <NextLink href={HOME}>
      <LogoWrapper>
        <Text size={TextSize.SH1} color={isHomeTop ? white : primary.gray}>
          HOONS.GG
        </Text>
      </LogoWrapper>
    </NextLink>
  );
}
