import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { TypingBoardModal } from './TypingBoardModal'

const meta: ComponentMeta<typeof TypingBoardModal> = {
  title: 'features/typing/TypingBoardModal',
  component: TypingBoardModal,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof TypingBoardModal> = {
  args: {
    isOpen: true,
  },
}
