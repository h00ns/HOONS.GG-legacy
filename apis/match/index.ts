import API from "@apis/axios"
import { getMatchDetailPayload, getMatchsData, getMatchsPayload } from "@customType/match"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  매치 리스트 가져오기 API
 *  @function getMatchsApi
 *  @param {string} puuid puuid
 */
export const getMatchsApi = ({ puuid }: getMatchsPayload): Promise<AxiosResponse<getMatchsData, AxiosError>> => {
  return API.get(`/api/match/${puuid}`)
}

/**
 *  매치 세부 정보 가져오기 API
 *  @function getMatchDetailAPi
 *  @param {string} matchId 매치 id
 */
export const getMatchDetailApi = ({matchId}: getMatchDetailPayload) => {
  return API.get(`/api/match/detail/${matchId}`)
}
