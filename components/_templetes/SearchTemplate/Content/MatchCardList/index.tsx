import styled from '@emotion/styled';
import { useRef } from 'react';

//  components
import MatchCard from './MatchCard';

//  hooks
import { useGetMatchsFetch } from '@hooks/fetch/useMatchFetch';
import { useInfiniteScroll } from '@hooks/interaction/useInfiniteScroll';

type Props = {
  puuid?: string;
};

const Layout = styled.div`
  display: grid;
  row-gap: 8px;
`;

const InfiniteScrollSection = styled.div`
  margin-top: 24px;
`;

/**
 *  MatchCard -> infinite scroll
 */
export default function MatchCardList({ puuid }: Props) {
  const sectionRef = useRef(null);

  /**
   *  @todo
   *  useInifiniteQuery -> useQueries 변경 후 inifiniteScroll 자체 구현
   */
  const { getMatchsData, getMatchsNextPage } = useGetMatchsFetch({ puuid });
  const matchsData = getMatchsData?.pages.flatMap((pageData) => pageData);

  useInfiniteScroll({ ref: sectionRef, callback: loadMore });

  function loadMore() {
    getMatchsNextPage();
  }

  return (
    <Layout>
      {matchsData?.map((matchId, idx) => (
        <MatchCard matchId={matchId} puuid={puuid} key={idx} />
      ))}
      <InfiniteScrollSection ref={sectionRef} />
    </Layout>
  );
}
