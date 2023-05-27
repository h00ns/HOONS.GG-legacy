import { getVersionsApi } from "@apis/version";
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
