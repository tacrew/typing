import { formatDuration } from 'date-fns'
import { ja } from 'date-fns/locale'

export const formatMillisecondDuration = (
  msec: number,
  locale: 'ja' | 'en' = 'ja'
) =>
  formatDuration(
    { seconds: msec / 1000 },
    {
      locale: locale === 'ja' ? ja : undefined,
    }
  )
