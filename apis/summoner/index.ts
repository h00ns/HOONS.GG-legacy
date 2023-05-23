import API from "@apis/axios"
import { getSummonerInfoByNameType } from "@customType/summoner"
import { AxiosResponse } from "axios"

/**
 *  소환사 이름으로 정보 가져오기 API
 *  @function getSummonerInfoByNameApi
 */
export const getSummonerInfoByNameApi = ({summonerName}:getSummonerInfoByNameType): Promise<AxiosResponse> => {
  return API.get(`/lol/summoner/v4/summoners/by-name/${summonerName}`)
}