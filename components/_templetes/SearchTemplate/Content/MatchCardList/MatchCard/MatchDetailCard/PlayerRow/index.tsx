import styled from '@emotion/styled';

//  components
import NextLink from '@components/_atoms/NextLink';
import Typography from '@components/_atoms/Typography';
import SpellBox from '@components/_organisms/service/SpellBox';
import ItemBox from '@components/_organisms/service/ItemBox';
import Champion from '@components/_atoms/Champion';
import DamageBox from './DamageBox';

//  constants
import { searchPath } from '@constants/routes/routes';
import { Radius } from '@styles/Radius';
import { black, gray, white } from '@styles/Colors';
import { TypoSize } from '@constants/atoms/Typography';
import { mq } from '@utils/style';

//  types
import { ParticipantsType } from '@customType/match';
import { DamageType } from '@components/_templetes/SearchTemplate/types';

//  hooks
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';

type Props = {
  data: ParticipantsType;
  myName?: string;
  maxDamage: DamageType;
};

const Layout = styled.div`
  padding: 4px;
  display: flex;
  align-items: center;
  column-gap: 12px;

  ${mq['md']} {
    margin-top: 12px;
    padding-top: 12px;
    flex-direction: column;
  }
`;

const FlexColumnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const RightBox = styled(FlexColumnBox)`
  ${mq['md']} {
    flex-direction: column;
  }
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

export default function PlayerRow({ data, myName, maxDamage }: Props) {
  const {
    summonerName,
    championId,
    champLevel,
    kills,
    deaths,
    assists,
    totalMinionsKilled,
    totalDamageDealtToChampions: deal,
    totalDamageTaken: taken,
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

        <RightBox>
          {/* Damage Box */}
          <DamageBox damage={{ deal, taken }} maxDamage={maxDamage} />
          {/* Damage Box end */}

          {/* Item Box */}
          <ItemBox size="25px" data={data} />
          {/* Item Box end */}
        </RightBox>
      </Layout>
    </NextLink>
  );
}
