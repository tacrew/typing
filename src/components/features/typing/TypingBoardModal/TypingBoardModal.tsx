import clsx from 'clsx'
import { useState, useEffect } from 'react'

import type { TypingBoardModalProps } from './type'

import { TypingBoard, TypingResult } from '@/components/features/typing'
import type { TypingMode } from '@/components/features/typing/TypingBoard/type'
import { Button, BaseModal } from '@/components/ui'
import { useCountdown, useTimer } from '@/hooks/utils'
import { generateRandomWords } from '@/utils/word'

import { COUNT_DOWN_SEC, MODE_TITLE } from './const'

export const TypingBoardModal = ({
  isOpen,
  onClose,
}: TypingBoardModalProps) => {
  const [typingMode, setTypingMode] = useState<TypingMode>('normal')
  const [questions, setQuestions] = useState<string[]>([])

  const [count, isRunning, { startCountdown, resetCountdown }] = useCountdown({
    countStart: COUNT_DOWN_SEC,
  })

  const {
    time,
    start: startTimer,
    stop: stopTimer,
    reset: resetTimer,
  } = useTimer()

  const handleStart = (mode: TypingMode) => {
    setTypingMode(mode)
    startCountdown()
  }

  const handleTypingCompleted = () => stopTimer()

  const handleReset = () => {
    resetCountdown()
    resetTimer()
    setQuestions(generateRandomWords(5, 8))
  }

  const handleRetryOnSameMode = () => {
    handleReset()
    startCountdown()
  }

  const handleRetryOnAnotherMode = () => {
    resetCountdown()
    resetTimer()
    handleStart(typingMode === 'easy' ? 'normal' : 'easy')
  }

  useEffect(() => {
    if (isOpen) {
      handleReset()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    if (count === 0) {
      startTimer()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count])

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <div className={clsx('flex min-h-[50vh] items-center justify-center')}>
        {count !== 0 ? (
          <div>
            {isRunning ? (
              <p className={clsx('text-6xl text-white')}>{count}</p>
            ) : (
              <div className={clsx('flex flex-col justify-center space-y-4')}>
                <Button theme="solid" onClick={() => handleStart('normal')}>
                  {`${MODE_TITLE.normal}モードで始める`}
                </Button>
                <Button theme="outline" onClick={() => handleStart('easy')}>
                  {`${MODE_TITLE.easy}モードで始める`}
                </Button>
              </div>
            )}
          </div>
        ) : time === undefined ? (
          <div>
            <TypingBoard
              questions={questions}
              mode={typingMode}
              onCompleted={handleTypingCompleted}
            />
          </div>
        ) : (
          <TypingResult
            mode={typingMode}
            questions={questions}
            resultTime={time}
            onRetryOnSameMode={handleRetryOnSameMode}
            onRetryOnAnotherMode={handleRetryOnAnotherMode}
          />
        )}
      </div>
    </BaseModal>
  )
}
