import { useMemo } from 'react'
import { ChampionDataType } from '@customType/champion'
import { useRecoilValue } from 'recoil'
import { championsState } from '@recoil/data'

/**
 *  id를 받아 챔피언 데이터 반환
 *  data 없을시 undefined 반환
 */
export const useGetChampionDataById = (id: number): ChampionDataType | undefined => { 
  const Champions = useRecoilValue(championsState);
  
  const data = useMemo(() => {
    // default value -> return undefined
    if (!Object.keys(Champions).length) return undefined
    
    const championArray = Object.values(Champions)
    return championArray.find(champion => Number(champion.key) === id)
  }, [id, Champions])

  return data as ChampionDataType;
}