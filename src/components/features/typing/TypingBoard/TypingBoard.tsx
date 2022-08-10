import clsx from 'clsx'
import { KeyboardEventHandler, useState } from 'react'

import type { TypingBoardProps } from './type'

import { useAutoFocus } from '@/hooks/utils'

import { FONT } from './const'

export const TypingBoard = ({
  questions,
  mode,
  onCompleted,
}: TypingBoardProps) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [entered, setEntered] = useState('')
  const [notEntered, setNotEntered] = useState(questions[questionIndex])
  const [typedError, setTypedError] = useState(false)

  const containerRef = useAutoFocus()

  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (notEntered.startsWith(e.key)) {
      setEntered((prev) => `${prev}${e.key}`)
      setNotEntered((prev) => prev.slice(1))
    } else {
      setTypedError(true)
      setTimeout(() => setTypedError(false), 100)
    }

    if (notEntered.length !== 1) return

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1)
      setEntered('')
      setNotEntered(questions[questionIndex + 1])
    } else {
      onCompleted()
    }
  }

  return (
    <div
      ref={containerRef}
      onKeyPress={handleKeyPress}
      tabIndex={0}
      className={clsx('w-full bg-black outline-none')}
    >
      <div className={clsx('text-right text-gray-500')}>
        {`${questionIndex + 1}/${questions.length}`}
      </div>
      <div
        className={clsx(
          'flex items-center justify-center rounded p-6',
          FONT[mode],
          typedError && 'bg-red-300 opacity-40'
        )}
      >
        <span className={clsx('text-5xl text-sky-300')}>{entered}</span>
        <span className={clsx('text-5xl text-white')}>{notEntered}</span>
      </div>
    </div>
  )
}
