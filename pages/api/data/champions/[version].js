// 최신 버전 챔피언 데이터 가져오기 API
export default async function handler(request, response) {
  const { version } = request.query;

  const res = await fetch(`https://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`);
  const data = await res.json();
  return response.status(res.status).json({ data });
}