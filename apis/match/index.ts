import API from "@apis/axios"
import { getMatchDetailData, getMatchDetailPayload, getMatchsData, getMatchsPayload } from "@customType/match"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  매치 리스트 가져오기 API
 *  @function getMatchsApi
 *  @param {string} puuid puuid
 *  @param {number} start 시작 index
 */
export const getMatchsApi = ({ puuid, start }: getMatchsPayload): Promise<AxiosResponse<getMatchsData, AxiosError>> => {
  return API.get(`/api/match/${puuid}?start=${start}`)
}

/**
 *  매치 세부 정보 가져오기 API
 *  @function getMatchDetailAPi
 *  @param {string} matchId 매치 id
 */
export const getMatchDetailApi = ({matchId}: getMatchDetailPayload): Promise<AxiosResponse<getMatchDetailData, AxiosError>> => {
  return API.get(`/api/match/detail/${matchId}`)
}
