export const useGetKdaAvg = (kills?: number, deaths?: number, assists?:number): number => {
  if (!kills || !deaths || !assists) return 0

  return Math.floor(((kills+assists) / deaths) * 100) / 100;
}