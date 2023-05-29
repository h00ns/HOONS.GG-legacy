import styled from '@emotion/styled';

//  components
import NextLink from '@components/_atoms/NextLink';
import Typography from '@components/_atoms/Typography';
import SpellBox from '@components/_organisms/service/SpellBox';
import ItemBox from '@components/_organisms/service/ItemBox';
import Champion from '@components/_atoms/Champion';

//  constants
import { searchPath } from '@constants/routes/routes';
import { Radius } from '@styles/Radius';
import { black, gray, white } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';

//  types
import { ParticipantsType } from '@customType/match';
import { mq } from '@utils/style';

//  hooks
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';
import DamageBox from './DamageBox';

type Props = {
  data: ParticipantsType;
  myName?: string;
};

const Layout = styled.div`
  padding: 4px;

  display: flex;
  align-items: center;
  column-gap: 12px;

  ${mq['md']} {
    flex-direction: column;
    row-gap: 4px;
  }
`;

const FlexColumnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const ChampionWrapper = styled.div`
  position: relative;
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

const TextWrapper = styled.div`
  width: 130px;

  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export default function PlayerRow({ data, myName }: Props) {
  const {
    summonerName,
    championId,
    champLevel,
    kills,
    deaths,
    assists,
    totalMinionsKilled,
    totalDamageDealt,
    totalDamageTaken,
  } = data ?? {};
  const isMyName = summonerName === myName;

  const championData = useGetChampionDataById(championId!);
  const { full: imagePath } = championData?.image ?? {};

  const SEARCH = searchPath.query({ name: summonerName });

  return (
    <NextLink href={SEARCH}>
      <Layout>
        <FlexColumnBox>
          <ChampionWrapper>
            <Champion size="40px" imagePath={imagePath ?? ''} />
            <ChampionLevelWrapper>
              <Typography size={TypoSize.B5} color={white}>
                {champLevel}
              </Typography>
            </ChampionLevelWrapper>
          </ChampionWrapper>

          {/* Spell Box */}
          <SpellBox size="20px" data={data} />
          {/* Spell Box end */}

          <TextWrapper>
            <Typography size={isMyName ? TypoSize.SH4 : TypoSize.B4}>{summonerName}</Typography>
            <Typography size={TypoSize.B4} color={gray.gray6}>
              {kills} / {deaths} / {assists} (cs : {totalMinionsKilled})
            </Typography>
          </TextWrapper>
        </FlexColumnBox>

        <FlexColumnBox>
          <DamageBox deal={totalDamageDealt} taken={totalDamageTaken} />

          {/* Item Box */}
          <ItemBox size="25px" data={data} />
          {/* Item Box end */}
        </FlexColumnBox>
      </Layout>
    </NextLink>
  );
}
