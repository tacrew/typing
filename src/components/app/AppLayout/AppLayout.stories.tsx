import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { AppLayout } from './AppLayout'

const meta: ComponentMeta<typeof AppLayout> = {
  title: 'app/AppLayout',
  component: AppLayout,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof AppLayout> = {
  args: {
    children: 'contents',
  },
}
