import { ReactNode } from 'react'

export type BaseModalProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}
