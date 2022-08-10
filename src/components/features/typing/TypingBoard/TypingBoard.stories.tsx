import { addons } from '@storybook/addons'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { TypingBoard } from './TypingBoard'

addons.setConfig({
  enableShortcuts: false,
})

const meta: ComponentMeta<typeof TypingBoard> = {
  title: 'features/typing/TypingBoard',
  component: TypingBoard,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof TypingBoard> = {
  args: {
    questions: ['time', 'maintain'],
    mode: 'normal',
  },
}
