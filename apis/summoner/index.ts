import API from "@apis/axios"
import { getSummonerDetailData, getSummonerDetailPayload, getSummonerInfoByNameData, getSummonerInfoByNamePayload } from "@customType/summoner"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  소환사 이름으로 정보 가져오기 API
 *  @function getSummonerInfoByNameApi
 *  @param {string} summonerName 소환사 명
 */
export const getSummonerInfoByNameApi = ({summonerName}:getSummonerInfoByNamePayload): Promise<AxiosResponse<getSummonerInfoByNameData, AxiosError>> => {
  return API.get(`/api/summoner/${summonerName}`)
}

/**
 *  소환사 id로 detail 정보 가져오기 API
 *  @function getSummonerDetailApi
 *  @param {string} id 소환사 고유 id값
 */
export const getSummonerDetailApi = ({id}: getSummonerDetailPayload): Promise<AxiosResponse<getSummonerDetailData, AxiosError>>  => {
  return API.get(`/api/summoner/detail/${id}`)
}