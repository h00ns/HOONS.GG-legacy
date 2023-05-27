import { getChampionLotationsApi } from "@apis/lotations";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

/**
 *  로테이션 챔피언 정보 가져오기 Fetch
 *  @function useGetChampionLotationsFetch
 */
export const useGetChampionLotationsFetch = () => {
  const { data: getChampionLotationsData } = useQuery(
    ['getChampionLotations'],
    async () => {
      const result = await getChampionLotationsApi();
      return result.data.data;
    },
    {
      onError: (err: AxiosError) => {
        console.log(err)
      }
    })
  

  return {
    getChampionLotationsData,
  }
}
