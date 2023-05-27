import { ChampionDataType } from "@customType/champion";

// 버전 리스트 가져오기 response type
export interface getVersionsData {
  data: string[];
}

// 최신버전 챔피언 데이터 가져오기 payload
export interface getChampionsPayload {
  version: string;
}

// 최신버전 챔피언 데이터 가져오기 response type
export interface getChampionsData {
  data: {
    data: {
      [championName: string]: ChampionDataType;
    };
  }
}