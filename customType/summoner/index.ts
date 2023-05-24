export interface getSummonerInfoByNamePayload  {
  summonerName: string;
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