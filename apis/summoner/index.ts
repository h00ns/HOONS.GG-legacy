import API from "@apis/axios"
import { getSummonerInfoByNameData, getSummonerInfoByNamePayload } from "@customType/summoner"
import { AxiosError, AxiosResponse } from "axios"

/**
 *  소환사 이름으로 정보 가져오기 API
 *  @function getSummonerInfoByNameApi
 */
export const getSummonerInfoByNameApi = ({summonerName}:getSummonerInfoByNamePayload): Promise<AxiosResponse<getSummonerInfoByNameData, AxiosError>> => {
  return API.get(`/api/summoner/${summonerName}`)
}