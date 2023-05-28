// 초 -> 시,분,초 변환
export const useGetGameTime = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds}초`
  }
  else if (seconds < 3600) {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;
    return `${min}분 ${sec}초`
  }
  else {
    const hours = Math.floor(seconds / 3600)
    const min = Math.floor((seconds - hours * 3600) / 60)
    const sec = seconds - hours * 3600 - min * 60
    return `${hours}시 ${min}분 ${sec}초`
  }
}