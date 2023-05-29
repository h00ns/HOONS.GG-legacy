import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

type Props = {
  readonly size: string;
  readonly imagePath: string;
};

const Component = styled.div`
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;

  position: relative;
`;

export default function Champion({ size, imagePath }: Props) {
  const width = size;
  const height = size;

  if (!imagePath) return null;
  return (
    <Component style={{ width, height }}>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${imagePath}`}
        layout="fill"
        alt={imagePath}
      />
    </Component>
  );
}
