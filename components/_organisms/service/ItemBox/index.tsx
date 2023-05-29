import styled from '@emotion/styled';

//  components
import Item from '@components/_atoms/Item';

//  types
import { ParticipantsType } from '@customType/match';

type Props = {
  size: string;
  data: ParticipantsType;
};

const Layout = styled.div`
  display: flex;
  column-gap: 4px;
`;

export default function ItemBox({ size, data }: Props) {
  const { item0, item1, item2, item3, item4, item5, item6 } = data ?? {};
  const itemArray = [item0, item1, item2, item3, item4, item5, item6].filter((item) => item !== 0);

  return (
    <Layout>
      {itemArray.map((item) => (
        <Item size={size} itemId={item} key={item} />
      ))}
    </Layout>
  );
}
