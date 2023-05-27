import API from "@apis/axios"
import { getChapionLotationsData } from "@customType/lotations"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  로테이션 챔피언 정보 가져오기 API
 *  @function getChampionLotationsApi
 */
export const getChampionLotationsApi = (): Promise<AxiosResponse<getChapionLotationsData, AxiosError>>  => {
  return API.get(`/api/lotations`)
}