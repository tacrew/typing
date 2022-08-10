import clsx from 'clsx'
import { useState, useEffect } from 'react'

import type { TypingBoardModalProps } from './type'

import { TypingBoard } from '@/components/features/typing'
import type { TypingMode } from '@/components/features/typing/TypingBoard/type'
import { Button, BaseModal } from '@/components/ui'
import { useCountdown } from '@/hooks/utils'
import { generateRandomWords } from '@/utils/word'

import { COUNT_DOWN_SEC } from './const'

export const TypingBoardModal = ({
  isOpen,
  onClose,
}: TypingBoardModalProps) => {
  const [typingMode, setTypingMode] = useState<TypingMode>('normal')

  const [count, isRunning, { startCountdown, resetCountdown }] = useCountdown({
    countStart: COUNT_DOWN_SEC,
  })

  const handleStart = (mode: TypingMode) => {
    setTypingMode(mode)
    startCountdown()
  }

  useEffect(() => {
    if (isOpen) {
      resetCountdown()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

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
                  通常モードで始める
                </Button>
                <Button theme="outline" onClick={() => handleStart('easy')}>
                  簡単モードで始める
                </Button>
              </div>
            )}
          </div>
        ) : (
          <TypingBoard questions={generateRandomWords(5)} mode={typingMode} />
        )}
      </div>
    </BaseModal>
  )
}
