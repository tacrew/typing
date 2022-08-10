import clsx from 'clsx'

import type { ButtonProps } from './type'

import { IconLoading } from '@/components/icons'

import { BUTTON_THEME_CLASS_NAME, BUTTON_SIZE_CLASS_NAME } from './const'

export const Button = ({
  theme = 'solid',
  size = 'base',
  isLoading = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center',
        'outline-none',
        'rounded-md font-bold',
        'transition duration-200',
        'active:scale-[0.98]',
        'disabled:cursor-not-allowed',
        BUTTON_THEME_CLASS_NAME[theme],
        BUTTON_SIZE_CLASS_NAME[size]
      )}
      {...props}
    >
      {isLoading && (
        <span className={clsx('mr-2 block h-4 w-4')}>
          <IconLoading />
        </span>
      )}
      {children}
    </button>
  )
}
