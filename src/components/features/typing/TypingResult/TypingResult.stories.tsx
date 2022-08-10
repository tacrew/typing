import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { TypingResult } from './TypingResult'

const meta: ComponentMeta<typeof TypingResult> = {
  title: 'features/typing/TypingResult',
  component: TypingResult,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof TypingResult> = {
  args: {
    questions: ['time', 'maintain'],
    resultTime: 16435,
  },
}
