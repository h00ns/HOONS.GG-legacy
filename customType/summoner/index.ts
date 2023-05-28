// 소환사 이름으로 정보 가져오기 payload
export interface getSummonerInfoByNamePayload  {
  summonerName?: string;
}

// 소환사 이름으로 정보 가져오기 response type
export interface getSummonerInfoByNameData {
  data: {
    accoundId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    summonerLevel: number;
    revisionDate: number;
  }
}

// 소환사 id로 detail 정보 가져오기 payload
export interface getSummonerDetailPayload {
  id?: string;
}

// 소환사 id로 detail 정보 가져오기 response type
export interface getSummonerDetailData {
  data: {
    freshBlood: boolean;
    hotStreak: boolean;
    inactive: boolean;
    leagueId: string;
    leaguePoints: number;
    losses: number;
    queueType: string;
    rank: string;
    summonerId: string;
    summonerName: string;
    tier: string;
    veteran: boolean;
    wins: number;
  }[];
}

export interface getSummonerDetailDataType {
  freshBlood: boolean;
  hotStreak: boolean;
  inactive: boolean;
  leagueId: string;
  leaguePoints: number;
  losses: number;
  queueType: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  tier: string;
  veteran: boolean;
  wins: number;
}