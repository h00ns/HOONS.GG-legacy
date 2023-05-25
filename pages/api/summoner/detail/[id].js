import { apiUrlComriler } from "..";

// 소환사 id로 detail 정보 가져오기 API
export default async function handler(request, response) {
  const { id } = request.query;

  const res = await fetch(apiUrlComriler(`/lol/league/v4/entries/by-summoner/${id}`));
  const data = await res.json();
  return response.status(res.status).json({ data });
}