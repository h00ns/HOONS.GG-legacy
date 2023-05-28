import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Radius } from '@styles/Radius';

//  hooks
import { useGetSpellName } from '@hooks/atoms/useGetSpellName';

type Props = {
  spellId: number;
};

const Layout = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  border-radius: ${Radius.MEDIUM};
  overflow: hidden;
`;

export default function Spell({ spellId }: Props) {
  const spellName = useGetSpellName(spellId);

  return (
    <Layout>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/spell/${spellName}.png`}
        layout="fill"
        alt={spellName}
      />
    </Layout>
  );
}
