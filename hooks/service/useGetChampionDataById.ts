import { useMemo } from 'react'
import Champions from '@static/Champions.json'
import { ChampionDataType } from '@customType/champion'

export const useGetChampionDataById = (id: number):ChampionDataType => { 
  const data = useMemo(() => {
    const champions = Object.values(Champions.data)
    return champions.find(champion => Number(champion.key) === id)
  }, [id])

  return data as ChampionDataType;
}