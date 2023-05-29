import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Radius } from '@styles/Radius';

//  hooks
import { useGetSpellName } from '@hooks/atoms/useGetSpellName';

type Props = {
  readonly size: string;
  readonly spellId: number;
};

const Component = styled.div`
  position: relative;

  border-radius: ${Radius.MEDIUM};
  overflow: hidden;
`;

export default function Spell({ size, spellId }: Props) {
  const spellName = useGetSpellName(spellId);

  const width = size;
  const height = size;

  return (
    <Component style={{ width, height }}>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellName}.png`}
        layout="fill"
        alt={spellName}
      />
    </Component>
  );
}
