import { getMatchDetailApi, getMatchsApi } from "@apis/match";
import { getMatchDetailPayload, getMatchsPayload } from "@customType/match";
import { AxiosError } from "axios";
import { useInfiniteQuery, useQuery } from "react-query";

/**
 *  매치 리스트 가져오기 Fetch
 *  @function useGetMatchsFetch
 */
export const useGetMatchsFetch = ({ puuid }: getMatchsPayload) => {
  const { data: getMatchsData, fetchNextPage: getMatchsNextPage } = useInfiniteQuery(
    ['getMatchs'],
    async ({ pageParam = 0 }) => {
      const result = await getMatchsApi({ puuid, start: pageParam });
      return result.data.data;
    },
    {
      enabled: !!puuid,
      getNextPageParam: (lastPage, allPages) => {
        return (allPages.length) * 8
      },
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  
  return {
    getMatchsData,
    getMatchsNextPage
  }
}

/**
 *  매치 세부 정보 가져오기 Fetch
 *  @function useGetMatchDetailFetch
 *  @param {string} matchId 매치 id
 */
export const useGetMatchDetailFetch = ({ matchId }: getMatchDetailPayload) => {
  const { data: getMatchDetailData } = useQuery(
    ['getMatchDetail', matchId],
    async () => {
      const result = await getMatchDetailApi({ matchId });
      return result.data.data; 
    },
    {
      enabled: !!matchId,
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  
  return {
    getMatchDetailData,
  }
}