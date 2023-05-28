import { getMatchsApi } from "@apis/match";
import { getMatchsPayload } from "@customType/match";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

/**
 *  최근 게임 가져오기 Fetch
 *  @function useGetMatchsFetch
 */
export const useGetMatchsFetch = ({ puuid }: getMatchsPayload) => {
  const { data: getMatchsData } = useQuery(
    ['getMatchs'],
    async () => {
      const result = await getMatchsApi({ puuid });
      return result.data.data;
    },
    {
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  
  return {
    getMatchsData,
  }
}
