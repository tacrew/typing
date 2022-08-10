import type { ComponentProps, ReactNode } from 'react'

export type ButtonTheme = 'solid' | 'outline' | 'ghost'
export type ButtonSize = 'sm' | 'base'

export type ButtonProps = Pick<
  ComponentProps<'button'>,
  'id' | 'name' | 'disabled' | 'onFocus' | 'onBlur'
> & {
  theme?: ButtonTheme
  size?: ButtonSize
  isLoading?: boolean
  children: ReactNode
  onClick: () => void
}
