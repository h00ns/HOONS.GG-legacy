import API from "@apis/axios"
import { getSummonerDetailPayload, getSummonerInfoByNameData, getSummonerInfoByNamePayload } from "@customType/summoner"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  소환사 이름으로 정보 가져오기 API
 *  @function getSummonerInfoByNameApi
 */
export const getSummonerInfoByNameApi = ({summonerName}:getSummonerInfoByNamePayload): Promise<AxiosResponse<getSummonerInfoByNameData, AxiosError>> => {
  return API.get(`/api/summoner/${summonerName}`)
}

/**
 *  소환사 id로 detail 정보 가져오기 API
 *  @function getSummonerDetailApi
 */
export const getSummonerDetailApi = ({id}: getSummonerDetailPayload) => {
  return API.get(`/api/summoner/detail/${id}`)
}