import { apiUrlCompiler } from "..";

// 소환사 이름으로 정보 가져오기 API
export default async function handler(request, response) {
  const { name } = request.query;

  const res = await fetch(apiUrlCompiler(`/lol/summoner/v4/summoners/by-name/${name}`));
  const data = await res.json();
  return response.status(res.status).json({ data });
}