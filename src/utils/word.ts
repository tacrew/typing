import randomWords from 'random-words'

export const generateRandomWords = (count: number, maxLength?: number) =>
  randomWords({ exactly: count, maxLength })
