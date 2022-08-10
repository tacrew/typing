import clsx from 'clsx'
import { useMemo } from 'react'

import type { TypingResultProps } from './type'

import { MODE_TITLE } from '@/components/features/typing/TypingBoardModal/const'
import { Button } from '@/components/ui'
import { formatMillisecondDuration } from '@/utils/date'

import { DataRow } from './DataRow'

export const TypingResult = ({
  mode,
  questions,
  resultTime,
  onRetryOnSameMode,
  onRetryOnAnotherMode,
}: TypingResultProps) => {
  const letterCount = useMemo(
    () => questions.reduce((sum, current) => (sum += current.length), 0),
    [questions]
  )

  const wpm = useMemo(() => {
    const minutes = resultTime / 1000 / 60
    return Math.round(letterCount / minutes)
  }, [letterCount, resultTime])

  return (
    <div className={clsx('flex flex-col items-center bg-black text-white')}>
      <h2 className={clsx('text-xl')}>タイピング結果</h2>

      <section className={clsx('mt-4')}>
        <DataRow label="選択モード" value={MODE_TITLE[mode]} />
        <DataRow
          label="入力時間"
          value={formatMillisecondDuration(resultTime)}
        />
        <DataRow label="入力文字数" value={`${letterCount}文字`} />
        <DataRow label="WPM" value={`${wpm}`} />
      </section>

      <section className={clsx('mt-8 flex flex-col items-center space-y-4')}>
        <Button theme="solid" onClick={onRetryOnSameMode}>
          違う問題に挑戦してみる
        </Button>
        <Button theme="outline" onClick={onRetryOnAnotherMode}>{`同じ問題に${
          MODE_TITLE[mode === 'easy' ? 'normal' : 'easy']
        }モードで挑戦`}</Button>
      </section>
    </div>
  )
}
