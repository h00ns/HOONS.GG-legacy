import { useGetMatchsFetch } from '@hooks/fetch/useMatchFetch';

type Props = {
  puuid?: string;
};

export default function MatchCardList({ puuid }: Props) {
  const { getMatchsData: matchsData } = useGetMatchsFetch({ puuid });

  return <></>;
}
