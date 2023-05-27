import { getChampionsApi, getVersionsApi } from "@apis/data";
import { getChampionsPayload } from "@customType/data";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

/**
 *  버전 리스트 가져오기 Fetch
 *  @function useGetVersionsFetch
 */
export const useGetVersionsFetch = () => {
  const { data: getVersionsData } = useQuery(
    ['getVersions'],
    async () => {
      const result = await getVersionsApi();
      return result.data.data;
    },
    {
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  

  return {
    getVersionsData,
  }
}

/**
 *  최신버전 챔피언 데이터 가져오기 Fetch
 *  @function useGetChampionsFetch
 */
export const useGetChampionsFetch = ({ version }: getChampionsPayload) => {
  const { data: getChampionsData } = useQuery(
    ['getChampions'],
    async () => {
      const result = await getChampionsApi({version});
      return result.data.data.data;
    },
    {
      enabled: !!version,
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  

  return {
    getChampionsData,
  }
}
