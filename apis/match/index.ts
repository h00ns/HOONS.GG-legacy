import API from "@apis/axios"
import { getMatchsPayload } from "@customType/match"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  최근 게임 가져오기 API
 *  @function getMatchsApi
 */
export const getMatchsApi = ({ puuid }: getMatchsPayload) => {
  return API.get(`/api/match/${puuid}`)
}