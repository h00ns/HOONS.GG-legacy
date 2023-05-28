import styled from '@emotion/styled';
import Image from 'next/image';

//  constants
import { Shadow } from '@styles/Shadow';

//  hooks
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';

type Props = {
  id: number;
};

const Layout = styled.div`
  position: relative;
`;

const ChampionImageWrapper = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  box-shadow: ${Shadow.MEDIUM};
`;

export default function ChampionItem({ id }: Props) {
  const championData = useGetChampionDataById(id);
  const { full: image } = championData?.image ?? {};

  if (image) {
    // only Image
    return (
      <Layout>
        <ChampionImageWrapper>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${image}`}
            layout="fill"
            alt={image}
          />
        </ChampionImageWrapper>
      </Layout>
    );
  } else {
    return null;
  }
}
