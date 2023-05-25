export interface getSummonerInfoByNamePayload  {
  summonerName?: string;
}

export interface getSummonerInfoByNameData {
  data: {
    accoundId: string;
    id: string;
    name: string;
    profileIconId: number;
    puuid: string;
    summonerLevel: number;
  }
}

export interface getSummonerDetailPayload {
  id?: string;
}

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
  }
}