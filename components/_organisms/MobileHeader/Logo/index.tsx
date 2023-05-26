import styled from '@emotion/styled';

/**
 *  Components
 */
//  atoms
import NextLink from '@components/_atoms/NextLink';
import Typography from '@components/_atoms/Typography';

//  constants
import { TypoSize } from '@constants/atoms/Typography';
import { primary, white } from '@styles/Colors';
import { HOME } from '@constants/routes/routes';

type Props = {
  isHomeTop?: boolean;
};

const LogoWrapper = styled.div`
  cursor: pointer;
`;

export default function Logo({ isHomeTop }: Props) {
  return (
    <NextLink href={HOME}>
      <LogoWrapper>
        <Typography size={TypoSize.SH1} color={isHomeTop ? white : primary.gray}>
          HOONS.GG
        </Typography>
      </LogoWrapper>
    </NextLink>
  );
}
