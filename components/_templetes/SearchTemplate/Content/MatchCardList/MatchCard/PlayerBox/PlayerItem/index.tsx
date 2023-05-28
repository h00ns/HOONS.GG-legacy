import styled from '@emotion/styled';
import Image from 'next/image';

//  components
import NextLink from '@components/_atoms/NextLink';

//  constants
import { gray, primary } from '@styles/Colors';
import { searchPath } from '@constants/routes/routes';
import { Radius } from '@styles/Radius';
import { Shadow } from '@styles/Shadow';

//  types
import { ParticipantsType } from '@customType/match';

//  hooks
import { useGetChampionDataById } from '@hooks/service/useGetChampionDataById';

type Props = {
  data: ParticipantsType;
  myName?: string;
};

const Layout = styled.div`
  width: 125px;

  display: grid;
  grid-template-columns: 18px 1fr;
  column-gap: 4px;
  align-items: center;
`;

const ChampionIconWrapper = styled.div`
  width: 18px;
  height: 18px;
  position: relative;
  border-radius: ${Radius.MEDIUM};
  box-shadow: ${Shadow.MEDIUM};
  overflow: hidden;
`;

const Text = styled.span<{ isMyName: boolean }>`
  font-size: 12px;
  color: ${gray.gray6};

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;

  ${({ isMyName }) =>
    isMyName &&
    `
    color:${gray.gray7};
    font-weight:bold;
  `}
`;

export default function PlayerItem({ data, myName }: Props) {
  const { championId, summonerName } = data ?? {};
  const isMyName = summonerName === myName;

  const championData = useGetChampionDataById(championId!);
  const { full: image } = championData?.image ?? {};

  const SEARCH = searchPath.query({ name: summonerName });

  return (
    <NextLink href={SEARCH}>
      <Layout>
        <ChampionIconWrapper>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/13.10.1/img/champion/${image}`}
            layout="fill"
            alt={image}
          />
        </ChampionIconWrapper>
        <Text isMyName={isMyName}>{summonerName}</Text>
      </Layout>
    </NextLink>
  );
}
