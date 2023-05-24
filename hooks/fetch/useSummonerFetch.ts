import { getSummonerInfoByNameApi } from "@apis/summoner"
import { getSummonerInfoByNamePayload } from "@customType/summoner"
import { AxiosError } from "axios"
import { useQuery } from "react-query"

/**
 *  소환사 이름으로 정보 가져오기 Fetch
 *  @function useGetSummonerInfoByNameFetch
 *  @param {string} summonerName 소환사 이름
 */
export const useGetSummonerInfoByNameFetch = ({ summonerName}:getSummonerInfoByNamePayload) => {
  const { data: getSummonerInfoByNameData } = useQuery(
    ['getSummonerInfo', summonerName],
    async () => {
      const result = await getSummonerInfoByNameApi({ summonerName });
      return result.data.data;
    },
    {
      enabled: !!summonerName,
      keepPreviousData: true,
      onError: (err: AxiosError) => {
        console.log(err)
      }
  })

  return {
    getSummonerInfoByNameData
  }
}