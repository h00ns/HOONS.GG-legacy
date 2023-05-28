import API from "@apis/axios"
import { getChampionsData, getChampionsPayload, getVersionsData } from "@customType/data"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  버전 리스트 가져오기 API
 *  @function getVersionsApi
 */
export const getVersionsApi = (): Promise<AxiosResponse<getVersionsData, AxiosError>> => {
  return API.get(`/api/data/version`)
}

/**
 *  Ver. 챔피언 데이터 가져오기 API
 *  @function getChampionsApi
 *  @param {string} version version
 */
export const getChampionsApi = ({ version }: getChampionsPayload): Promise<AxiosResponse<getChampionsData, AxiosError>> => {
  return API.get(`/api/data/champions/${version}`)
}