export const useGetPercentage = (value?: number, total?: number): number => {
  if (!value || !total) return 0

  return Math.floor((value / total) * 100);
}