/**
 *  Riot api는 브라우저 단의 요청을 거부해놨으므로 -> cors error
 *  next.js 의 api routes를 이용하여 별도의 임시 서버처리
 *  (BE는 형태만 갖춰놓음)
 */

// api base url compiler (kr)
export function apiUrlCompiler(url) {
  return `${process.env.NEXT_PUBLIC_API_URL}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
}

// api region url compiler (asia)
export function apiRegionUrlCompiler(url) {
  return `${process.env.NEXT_PUBLIC_API_URL_REGION}${url}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
}