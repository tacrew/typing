import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { TopPage } from './Top'

const meta: ComponentMeta<typeof TopPage> = {
  title: 'ページ/Top',
  component: TopPage,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof TopPage> = {
  name: '正常系',
}
