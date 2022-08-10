import clsx from 'clsx'
import { KeyboardEventHandler, useState } from 'react'

import type { TypingBoardProps } from './type'

export const TypingBoard = ({ questions }: TypingBoardProps) => {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [entered, setEntered] = useState('')
  const [notEntered, setNotEntered] = useState(questions[questionIndex])
  const [typedError, setTypedError] = useState(false)

  const handleKeyPress: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (notEntered.startsWith(e.key)) {
      setEntered((prev) => `${prev}${e.key}`)
      setNotEntered((prev) => prev.slice(1))
    } else {
      setTypedError(true)
      setTimeout(() => setTypedError(false), 100)
    }

    if (notEntered.length === 1 && questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1)
      setEntered('')
      setNotEntered(questions[questionIndex + 1])
    }
  }

  return (
    <div
      onKeyPress={handleKeyPress}
      tabIndex={0}
      className={clsx('outline-none')}
    >
      <div className={clsx('text-right text-gray-500')}>
        {`${questionIndex + 1}/${questions.length}`}
      </div>
      <div
        className={clsx(
          'flex items-center justify-center rounded p-6 font-electroharmonix',
          typedError && 'bg-red-200 opacity-40'
        )}
      >
        <span className={clsx('text-3xl text-orange-300')}>{entered}</span>
        <span className={clsx('text-3xl')}>{notEntered}</span>
      </div>
    </div>
  )
}
