import clsx from 'clsx'
import NextLink from 'next/link'

import type { AppLayoutProps } from './type'

import { ROUTE } from '@/constatns/route'

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className={clsx('grid min-h-screen grid-rows-layout bg-black')}>
      <header className="mx-auto w-2/3 py-4">
        <NextLink href={ROUTE.top()}>
          <a className={clsx('flex items-center space-x-4')}>
            <div className={clsx('h-8 w-8')}>
              <img
                src="https://twemoji.maxcdn.com/v/latest/svg/2328.svg"
                alt=""
              />
            </div>
            <h1 className={clsx('text-2xl font-black text-white')}>
              Font Typing
            </h1>
          </a>
        </NextLink>
      </header>
      <main>{children}</main>
      <footer className={clsx('py-4')}>
        <ul
          className={clsx(
            'flex items-center justify-center space-x-4 text-sm text-gray-400'
          )}
        >
          <li>
            <NextLink href={ROUTE.top()}>
              <a className={clsx('transition duration-200 hover:opacity-50')}>
                利用規約
              </a>
            </NextLink>
          </li>
          <li>
            <NextLink href={ROUTE.top()}>
              <a className={clsx('transition duration-200 hover:opacity-50')}>
                プライバシーポリシー
              </a>
            </NextLink>
          </li>
        </ul>
        <div className={clsx('mt-2 text-center text-sm text-gray-400')}>
          <span>image by </span>
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </div>
      </footer>
    </div>
  )
}
