import { apiRegionUrlCompiler } from "..";

// 최근 게임 가져오기 API
export default async function handler(request, response) {
  const { puuid } = request.query;

  const res = await fetch(apiRegionUrlCompiler(`/lol/match/v5/matches/by-puuid/${puuid}/ids`));
  const data = await res.json();
  return response.status(res.status).json({ data });
}