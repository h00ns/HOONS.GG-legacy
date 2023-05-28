import { QueueType } from "@constants/service"
import { useMemo } from "react"

// 큐 타입 return
export const useGetQueueType = (queueId: QueueType) => {
  const queueType = useMemo(() => {
    switch (queueId) {
      case QueueType.SOLO:
        return '솔랭'
      case QueueType.NORMAL:
        return '일반'
      case QueueType.FLEX:
        return '자유 5:5 랭크'
      case QueueType.ARAM:
        return '무작위 총력전'
    }
  }, [queueId])

  return queueType
}