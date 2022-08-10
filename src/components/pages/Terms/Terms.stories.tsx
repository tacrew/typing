import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { TermsPage } from './Terms'

const meta: ComponentMeta<typeof TermsPage> = {
  title: 'ページ/Terms',
  component: TermsPage,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof TermsPage> = {
  name: '正常系',
}
