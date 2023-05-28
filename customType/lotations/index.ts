// 로테이션 챔피언 정보 가져오기 response type
export interface getChapionLotationsData {
  data: {
    freeChampionIds: number[];
    freeChampionIdsForNewPlayers: number[];
    maxNewPlayerLevel: number;
  }
}