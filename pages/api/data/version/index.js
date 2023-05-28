// 버전 리스트 가져오기 API
export default async function handler(request, response) {
  const res = await fetch(`https://ddragon.leagueoflegends.com/api/versions.json`);
  const data = await res.json();
  return response.status(res.status).json({ data });
}