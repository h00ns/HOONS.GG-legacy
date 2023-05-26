export const getWinRate = (wins?: number, total?: number): number => {
  if (!wins || !total) return 0

  return Math.floor((wins / total) * 100);
}