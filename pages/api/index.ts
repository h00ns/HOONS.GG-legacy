/**
 *  Riot api는 브라우저 단의 요청을 거부해놨으므로 -> cors error
 *  next.js 의 api routes를 이용하여 별도의 임시 서버처리
 *  (BE는 형태만 갖춰놓음)
 */

// api base url compiler (kr)
export function apiUrlCompiler(path: string, query: QueryType) {
  const API_URL = urlCompiler(`${process.env.NEXT_PUBLIC_API_URL}${path}`, query)
  return API_URL
}

// api region url compiler (asia)
export function apiRegionUrlCompiler(path: string, query: QueryType) {
  const API_URL = urlCompiler(`${process.env.NEXT_PUBLIC_API_URL_REGION}${path}`, query)
  return API_URL
}

interface QueryType {
  [key: string]: string | number | boolean;
}
function urlCompiler(path: string, query: QueryType = {}) {
  const keys = Object.keys(query);
  const suffix = keys.reduce((prev, key: string) => {
    return prev += `&${key}=${query[key]}`
  }, '')
  
  return  path + `?api_key=${process.env.NEXT_PUBLIC_API_KEY}${suffix}`
}