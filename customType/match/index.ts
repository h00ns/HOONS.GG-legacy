// 매치 리스트 가져오기 payload
export interface getMatchsPayload {
  puuid?: string;
}

// 매치 리스트 가져오기 response type
export interface getMatchsData {
  data: string[];
}

// 매치 세부 정보 가져오기 payload 
export interface getMatchDetailPayload {
  matchId?: string;
}
