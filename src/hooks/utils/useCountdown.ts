import { useCallback } from 'react'

import { useCounter, useBoolean, useInterval } from '@/hooks/utils'

type CountdownOption = {
  countStart: number
  intervalMs?: number
  countStop?: number
}

type CountdownControllers = {
  startCountdown: () => void
  stopCountdown: () => void
  resetCountdown: () => void
}

export const useCountdown = ({
  countStart,
  countStop = 0,
  intervalMs = 1000,
}: CountdownOption): [number, boolean, CountdownControllers] => {
  const { count, decrement, reset: resetCounter } = useCounter(countStart)

  const {
    value: isCountdownRunning,
    setTrue: startCountdown,
    setFalse: stopCountdown,
  } = useBoolean(false)

  const resetCountdown = () => {
    stopCountdown()
    resetCounter()
  }

  const countdownCallback = useCallback(() => {
    if (count === countStop) {
      stopCountdown()
      return
    }

    decrement()
  }, [count, countStop, decrement, stopCountdown])

  useInterval(countdownCallback, isCountdownRunning ? intervalMs : null)

  return [
    count,
    isCountdownRunning,
    {
      startCountdown,
      stopCountdown,
      resetCountdown,
    } as CountdownControllers,
  ]
}
