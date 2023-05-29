import styled from '@emotion/styled';
import Image from 'next/image';

//  components
import NextLink from '@components/_atoms/NextLink';
import Typography from '@components/_atoms/Typography';
import SpellBox from '@components/_organisms/service/SpellBox';

//  constants
import { searchPath } from '@constants/routes/routes';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';
import { black, white } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';

//  types
import { ParticipantsType } from '@customType/match';

//  hooks
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';

type Props = {
  data: ParticipantsType;
};

const Layout = styled.div`
  padding: 4px;

  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const ChampionWrapper = styled.div`
  position: relative;
`;

const ChampionImageWrapper = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: ${Radius.MAXIMUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;
`;

const ChampionLevelWrapper = styled.div`
  width: max-content;
  padding: 3px;
  background: ${black};
  border-radius: ${Radius.MAXIMUM};

  position: absolute;
  top: 60%;
  left: -15%;
`;

export default function PlayerRow({ data }: Props) {
  const { summonerName, championId, champLevel } = data ?? {};

  const championData = useGetChampionDataById(championId!);
  const { full: image } = championData?.image ?? {};

  const SEARCH = searchPath.query({ name: summonerName });

  return (
    <NextLink href={SEARCH}>
      <Layout>
        <ChampionWrapper>
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
        </ChampionWrapper>

        {/* Spell Box */}
        <SpellBox size="20px" data={data} />
        {/* Spell Box end */}

        <Typography size={TypoSize.B4}>{summonerName}</Typography>
      </Layout>
    </NextLink>
  );
}
