import clsx from 'clsx'
import { useRef } from 'react'
import { createPortal } from 'react-dom'

import type { BaseModalProps } from './type'

import { useAriaHidden, useFocusTrap, useScrollLock } from '@/hooks/utils'

export const BaseModal = ({ isOpen, onClose, children }: BaseModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useAriaHidden(ref, isOpen)
  useFocusTrap({ ref, isOpen, onClose })
  useScrollLock(ref, isOpen)

  if (!isOpen) return null

  return createPortal(
    <div
      className={clsx(
        'fixed inset-0 flex items-center justify-center bg-black/50 p-5'
      )}
    >
      <div
        ref={ref}
        role="dialog"
        aria-modal
        className={clsx('w-full rounded bg-white p-5')}
      >
        {children}
      </div>
    </div>,
    document.body
  )
}
