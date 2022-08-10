import {} from 'react'
import clsx from 'clsx'

import { AppLayout } from '@/components/app'

export const TermsPage = () => {
  return (
    <AppLayout>
      <div className={clsx('mx-auto w-2/3 py-8 text-white')}>
        <h1 className={clsx('text-xl font-bold')}>利用規約</h1>
        <p className={clsx('mt-2 text-gray-300')}>
          この利用規約は本サービスの利用条件を定めるものです。ユーザーの方々（以下「ユーザー」）には、本規約に則って本サービスをご利用いただきます。
        </p>
        <ul className={clsx('mt-6 space-y-4')}>
          <li>
            <h3 className={clsx('font-bold')}>第1条（適用）</h3>
            <p className={clsx('mt-2 text-gray-300')}>
              本規約は、ユーザーと本サービスの利用に関わる一切の関係に適用されるものとします。
            </p>
          </li>
          <li>
            <h3 className={clsx('font-bold')}>第2条（禁止事項）</h3>
            <div className={clsx('mt-2 text-gray-300')}>
              <span>
                ユーザーは、本サービスを利用するうえで以下の行為をしてはなりません。
              </span>
              <ul className={clsx('mt-2 list-disc space-y-2 pl-4')}>
                <li>法令または公序良俗に違反する行為や犯罪行為</li>
                <li>著作権や商標権などの知的財産権を侵害する行為</li>
                <li>
                  本サービス、またはその他第三者のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
                </li>
                <li>不正アクセスを試みる行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>
                  本サービスの他のユーザーまたはその他の第三者に不利益、損害、不快感を与える行為
                </li>
                <li>不他のユーザーに成りすます行為</li>
                <li>
                  本サービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
                </li>
                <li>その他、運営者が不適切と判断する行為</li>
              </ul>
            </div>
          </li>
          <li>
            <h3 className={clsx('font-bold')}>
              第3条（本サービスの提供の変更・停止）
            </h3>
            <p className={clsx('mt-2 text-gray-300')}>
              本サービスはユーザーに事前に通知することなく提供サービスの内容を変更することができるものとします。
              また、事前の予告なく提供サービスの全部または一部を停止、中断することができるものとします。
            </p>
          </li>
          <li>
            <h3 className={clsx('font-bold')}>第4条（免責事項）</h3>
            <p className={clsx('mt-2 text-gray-300')}>
              本サービスに起因してユーザーに生じたあらゆる損害について、本サービスに運営者は一切の責任を負いません。
            </p>
          </li>
          <li>
            <h3 className={clsx('font-bold')}>第5条（利用規約の変更）</h3>
            <p className={clsx('mt-2 text-gray-300')}>
              本サービスの運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお、本規約の変更後、本サービスの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
            </p>
          </li>
        </ul>
      </div>
    </AppLayout>
  )
}
