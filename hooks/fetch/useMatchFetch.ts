import { getMatchDetailApi, getMatchsApi } from "@apis/match";
import { getMatchDetailPayload, getMatchsPayload } from "@customType/match";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

/**
 *  매치 리스트 가져오기 Fetch
 *  @function useGetMatchsFetch
 */
export const useGetMatchsFetch = ({ puuid }: getMatchsPayload) => {
  const { data: getMatchsData } = useQuery(
    ['getMatchs', puuid],
    async () => {
      const result = await getMatchsApi({ puuid });
      return result.data.data;
    },
    {
      enabled: !!puuid,
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  
  return {
    getMatchsData,
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