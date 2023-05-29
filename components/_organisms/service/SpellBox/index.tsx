import styled from '@emotion/styled';

//  components
import Spell from '@components/_atoms/Spell';
import Rune from '@components/_atoms/Rune';

//  types
import { ParticipantsType } from '@customType/match';

type Props = {
  size: string;
  data: ParticipantsType;
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export default function SpellBox({ size, data }: Props) {
  const { summoner1Id, summoner2Id, perks } = data ?? {};

  const primaryPerk = perks.styles?.find((item) => item.description === 'primaryStyle');
  const primaryPerkId = primaryPerk?.selections[0].perk!;

  const subPerk = perks.styles?.find((item) => item.description === 'subStyle');
  const subPerkId = subPerk?.style!;

  return (
    <Layout>
      <Spell size={size} spellId={summoner1Id} />
      <Rune size={size} runeId={primaryPerkId} />
      <Spell size={size} spellId={summoner2Id} />
      <Rune size={size} runeId={subPerkId} />
    </Layout>
  );
}
