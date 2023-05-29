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
import Champion from '@components/_atoms/Champion';

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
  const { full: imagePath } = championData?.image ?? {};

  const SEARCH = searchPath.query({ name: summonerName });

  return (
    <NextLink href={SEARCH}>
      <Layout>
        <Champion size="18px" imagePath={imagePath ?? ''} />
        <Text isMyName={isMyName}>{summonerName}</Text>
      </Layout>
    </NextLink>
  );
}
