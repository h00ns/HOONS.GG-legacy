import { apiRegionUrlCompiler } from "../../index";

// 매치 세부 정보 가져오기 API
export default async function handler(request, response) {
  const { matchId } = request.query;

  const res = await fetch(apiRegionUrlCompiler(`/lol/match/v5/matches/${matchId}`));
  const data = await res.json();
  return response.status(res.status).json({ data });
}