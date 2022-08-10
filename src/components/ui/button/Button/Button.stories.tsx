import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: ComponentMeta<typeof Button> = {
  title: 'ui/button/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof Button> = {
  args: {
    id: 'button',
    name: 'button',
    theme: 'solid',
    size: 'base',
    disabled: false,
    isLoading: false,
    children: 'click here',
  },
}
