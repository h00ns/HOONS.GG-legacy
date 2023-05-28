import styled from '@emotion/styled';

//  types
import { ParticipantsType } from '@customType/match';
import Image from 'next/image';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  display: flex;
  column-gap: 4px;
`;

const ItemImageWrapper = styled.div`
  width: 25px;
  height: 25px;
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;
  position: relative;
`;

export default function ItemBox({ data }: Props) {
  const { item0, item1, item2, item3, item4, item5, item6 } = data ?? {};
  const itemArray = [item0, item1, item2, item3, item4, item5, item6].filter((item) => item !== 0);

  return (
    <Layout>
      {itemArray.map((item) => (
        <ItemImageWrapper key={item}>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/item/${item}.png`}
            layout="fill"
            alt={item.toString()}
          />
        </ItemImageWrapper>
      ))}
    </Layout>
  );
}
