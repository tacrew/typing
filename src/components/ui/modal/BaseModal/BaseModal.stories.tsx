import { ComponentMeta, ComponentStoryObj } from '@storybook/react'

import { BaseModal } from './BaseModal'

const meta: ComponentMeta<typeof BaseModal> = {
  title: 'ui/modal/BaseModal',
  component: BaseModal,
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

export const Base: ComponentStoryObj<typeof BaseModal> = {
  args: {
    isOpen: true,
    children: <button>sample</button>,
  },
}
