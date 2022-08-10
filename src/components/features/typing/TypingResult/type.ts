import type { TypingMode } from '@/components/features/typing/TypingBoard/type'

export type TypingResultProps = {
  mode: TypingMode
  questions: string[]
  /** ms */
  resultTime: number
  onRetryOnSameMode: () => void
  onRetryOnAnotherMode: () => void
}
