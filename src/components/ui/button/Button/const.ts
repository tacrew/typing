import clsx from 'clsx'

import type { ButtonSize, ButtonTheme } from './type'

export const BUTTON_THEME_CLASS_NAME: Record<ButtonTheme, string> = {
  solid: clsx(
    'bg-sky-400 text-white',
    'hover:bg-sky-500',
    'disabled:bg-sky-300 disabled:text-gray-300'
  ),
  outline: clsx(
    'bg-transparent text-sky-400 border border-sky-400',
    'hover:bg-sky-400 hover:text-white',
    'disabled:text-gray-400 disabled:border-gray-400 disabled:hover:bg-white'
  ),
  ghost: clsx(
    'bg-white text-black',
    'hover:bg-gray-100',
    'disabled:text-gray-700'
  ),
}

export const BUTTON_SIZE_CLASS_NAME: Record<ButtonSize, string> = {
  sm: clsx('h-8 px-3 text-sm'),
  base: clsx('h-10 px-4 text-base'),
}
