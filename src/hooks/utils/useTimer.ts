import { useState, useMemo } from 'react'

export const useTimer = () => {
  const [startedAt, setStartedAt] = useState<number | null>(null)
  const [endedAt, setEndedAt] = useState<number | null>(null)

  const start = () => setStartedAt(Date.now())
  const stop = () => setEndedAt(Date.now())
  const reset = () => {
    setStartedAt(null)
    setEndedAt(null)
  }

  const time = useMemo(() => {
    if (startedAt === null || endedAt === null) return undefined
    return endedAt - startedAt
  }, [startedAt, endedAt])

  return {
    time,
    isRunnning: startedAt !== null,
    start,
    stop,
    reset,
  }
}
