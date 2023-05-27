import API from "@apis/axios"

/**
 *  버전 리스트 가져오기 API
 *  @function getVersionsApi
 */
export const getVersionsApi = () => {
  return API.get(`/api/version`)
}