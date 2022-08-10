import clsx from 'clsx'

import type { ButtonSize, ButtonTheme } from './type'

export const BUTTON_THEME_CLASS_NAME: Record<ButtonTheme, string> = {
  solid: clsx(
    'bg-black text-white',
    'hover:opacity-60',
    'active:opacity-90',
    'disabled:bg-gray-300 disabled:text-gray-500'
  ),
  outline: clsx(
    'bg-white text-black border border-gray-400',
    'hover:bg-gray-100',
    'active:bg-gray-200 active:border-none',
    'disabled:text-gray-500'
  ),
  ghost: clsx(
    'bg-white text-black',
    'hover:bg-gray-100',
    'active:bg-gray-200',
    'disabled:text-gray-700'
  ),
}

export const BUTTON_SIZE_CLASS_NAME: Record<ButtonSize, string> = {
  sm: clsx('h-8 px-3 text-sm'),
  base: clsx('h-10 px-4 text-base'),
}
