import { useTranslation } from "next-i18next";

// 초 -> 시,분,초 변환
export const useGetGameTime = (seconds: number) => {
  const { t } = useTranslation('search');

  if (seconds < 60) {
    return `${seconds}${t('sec')}`
  }
  else if (seconds < 3600) {
    const min = Math.floor(seconds / 60);
    const sec = seconds - min * 60;
    return `${min}${t('min')} ${sec}${t('sec')}`
  }
  else {
    const hours = Math.floor(seconds / 3600)
    const min = Math.floor((seconds - hours * 3600) / 60)
    const sec = seconds - hours * 3600 - min * 60
    return `${hours}${t('hour')} ${min}${t('min')} ${sec}${t('sec')}`
  }
}