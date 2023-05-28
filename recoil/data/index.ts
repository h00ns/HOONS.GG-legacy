import { ChampionDataType } from '@customType/champion';
import { atom } from 'recoil';
import { v4 as uuidv4 } from 'uuid';


export const versionState = atom({
  key: `language/${uuidv4()}`,
  default: ''
})

interface ChampionsStateType {
  [championName:string]: ChampionDataType
}
export const championsState = atom<ChampionsStateType>({
  key: `/champions/${uuidv4()}`,
  default: {}
})