import { QueueType } from "@constants/service"
import { useTranslation } from "next-i18next";
import { useMemo } from "react"

// 큐 타입 return
export const useGetQueueType = (queueId: QueueType) => {
  const { t } = useTranslation('search');
  
  const queueType = useMemo(() => {
    switch (queueId) {
      case QueueType.SOLO:
        return t('solo-rank-title')
      case QueueType.NORMAL:
        return t('normal-title')
      case QueueType.FLEX:
        return t('flex-rank-title')
      case QueueType.ARAM:
        return t('aram-title')
    }
  }, [queueId, t])

  return queueType
}