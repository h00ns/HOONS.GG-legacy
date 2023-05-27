import API from "@apis/axios"

/**
 *  로테이션 챔피언 정보 가져오기 API
 *  @function getChampionLotationsApi
 */
export const getChampionLotationsApi = () => {
  return API.get(`/api/lotations`)
}