import styled from '@emotion/styled';

//  components
import Typography from '@components/_atoms/Typography';
import Champion from '@components/_atoms/Champion';

//  constants
import { black, white } from '@styles/Colors';
import { Radius } from '@styles/Radius';
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
  const { full: imagePath } = championData?.image ?? {};

  return (
    <Layout>
      <Champion size="50px" imagePath={imagePath ?? ''} />
      <ChampionLevelWrapper>
        <Typography size={TypoSize.B5} color={white}>
          {champLevel}
        </Typography>
      </ChampionLevelWrapper>
    </Layout>
  );
}
