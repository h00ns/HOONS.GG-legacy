import styled from '@emotion/styled';
import Image from 'next/image';

//  components
import Typography from '@components/_atoms/Typography';

//  constants
import { black, white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { TypoSize } from '@constants/atoms/Typography';

//  types
import { ParticipantsType } from '@customType/match';
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  position: relative;
`;

const ChampionImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  box-shadow: ${Shadow.MEDIUM};
  border-radius: ${Radius.MAXIMUM};
  overflow: hidden;
`;

const ChampionLevelWrapper = styled.div`
  width: max-content;
  padding: 3px;
  background: ${black};
  border-radius: ${Radius.MAXIMUM};

  position: absolute;
  top: 60%;
  left: 70%;
`;

export default function ChampionBox({ data }: Props) {
  const { champLevel, championId } = data ?? {};

  const championData = useGetChampionDataById(championId!);
  const { full: image } = championData?.image ?? {};

  return (
    <Layout>
      <ChampionImageWrapper>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${image}`}
          layout="fill"
          alt={image}
        />
      </ChampionImageWrapper>
      <ChampionLevelWrapper>
        <Typography size={TypoSize.B5} color={white}>
          {champLevel}
        </Typography>
      </ChampionLevelWrapper>
    </Layout>
  );
}
