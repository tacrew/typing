import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { IconLoading } from './IconLoading'

const meta: ComponentMeta<typeof IconLoading> = {
  title: 'icons/IconLoading',
  component: IconLoading,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof IconLoading> = {}
