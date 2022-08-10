import randomWords from 'random-words'

export const generateRandomWords = (count: number) =>
  randomWords({ exactly: count })
