import styled from '@emotion/styled';

//  components
import Spell from '@components/_atoms/Spell';
import Rune from '@components/_atoms/Rune';

//  types
import { ParticipantsType } from '@customType/match';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;

export default function SpellBox({ data }: Props) {
  const { summoner1Id, summoner2Id, perks } = data ?? {};

  const primaryPerk = perks.styles?.find((item) => item.description === 'primaryStyle');
  const primaryPerkId = primaryPerk?.selections[0].perk!;

  const subPerk = perks.styles?.find((item) => item.description === 'subStyle');
  const subPerkId = subPerk?.style!;

  return (
    <Layout>
      <Spell spellId={summoner1Id} />
      <Rune runeId={primaryPerkId} />
      <Spell spellId={summoner2Id} />
      <Rune runeId={subPerkId} />
    </Layout>
  );
}
