import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { PrivacyPolicyPage } from './PrivacyPolicy'

const meta: ComponentMeta<typeof PrivacyPolicyPage> = {
  title: 'ページ/PrivacyPolicy',
  component: PrivacyPolicyPage,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof PrivacyPolicyPage> = {
  name: '正常系',
}
