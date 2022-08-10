import clsx from 'clsx'

import { AppLayout } from '@/components/app'
import { TypingBoardModal } from '@/components/features/typing'
import { Button } from '@/components/ui'
import { useDisclosure } from '@/hooks/utils'

export const TopPage = () => {
  const { isOpen, open, close } = useDisclosure()

  return (
    <AppLayout>
      <div className={clsx('py-8')}>
        <h2
          className={clsx(
            'text-center text-4xl font-bold leading-normal text-white'
          )}
        >
          かんたんな単語なのに
          <br />
          むずかしい？
        </h2>

        <div className={clsx('mt-20 flex justify-center')}>
          <Button onClick={open}>挑戦してみる</Button>
        </div>

        <p className={clsx('mt-4 text-center text-sm text-gray-400')}>
          会員登録不要
        </p>

        <TypingBoardModal isOpen={isOpen} onClose={close} />
      </div>
    </AppLayout>
  )
}
