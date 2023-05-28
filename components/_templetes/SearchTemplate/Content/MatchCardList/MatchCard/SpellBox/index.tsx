import styled from '@emotion/styled';
import Image from 'next/image';

//  types
import { ParticipantsType } from '@customType/match';
import Spell from '@components/_atoms/Spell';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  display: grid;
  row-gap: 4px;
`;

export default function SpellBox({ data }: Props) {
  const { summoner1Id, summoner2Id } = data ?? {};
  return (
    <Layout>
      <Spell spellId={summoner1Id} />
      <Spell spellId={summoner2Id} />
    </Layout>
  );
}
