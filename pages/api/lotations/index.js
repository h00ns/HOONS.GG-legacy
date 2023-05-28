import { apiUrlCompiler } from "..";

// 로테이션 챔피언 정보 가져오기 API
export default async function handler(request, response) {
  const res = await fetch(apiUrlCompiler(`/lol/platform/v3/champion-rotations`));
  const data = await res.json();
  return response.status(res.status).json({ data });
}