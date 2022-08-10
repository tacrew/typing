import clsx from 'clsx'

import { AppLayout } from '@/components/app'

export const PrivacyPolicyPage = () => {
  return (
    <AppLayout>
      <div className={clsx('mx-auto px-4 pt-2 text-white md:w-2/3 md:px-0')}>
        <h1 className={clsx('text-center text-xl font-bold')}>
          プライバシーポリシー
        </h1>
        <ul className={clsx('mt-6 space-y-4')}>
          <li>
            <h3 className={clsx('font-bold')}>個人情報の収集</h3>
            <p className={clsx('mt-2 text-gray-300')}>
              本サービスは現時点では利用登録なしでご利用いただけます（ただし、今後のサービス改善を行ううえで、利便性や嫌がらせ防止のために利用登録を求める形へ変更する可能性があります）。
            </p>
          </li>

          <li>
            <h3 className={clsx('font-bold')}>アクセス解析ツール</h3>
            <p className={clsx('mt-2 text-gray-300')}>
              当サービスでは、アクセス解析のためにGoogle
              Analyticsを利用しています。 Google
              Analyticsはデータの収集のためにCookieを使用しますが、個人が特定されることはありません。
              Google
              AnalyticsによるトラッキングはCookieを無効にすることで収集を拒否することが可能です。詳しくはGoogle
              Analyticsのポリシーと利用規約をご覧ください。
            </p>
          </li>
        </ul>
      </div>
    </AppLayout>
  )
}
