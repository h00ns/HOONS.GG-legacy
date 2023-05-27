import Champions from '@static/Champions.json'

export const getChampionNameById = (id: number) => {
  let championName = ''
  Object.entries(Champions.data).map(([name, { key }]) => {
    if (Number(key) === id) {
      championName = name
    }
  })

  return championName;
}