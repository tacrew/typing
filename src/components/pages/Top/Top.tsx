import {} from 'react'
import clsx from 'clsx'

import { TypingBoard } from '@/components/features/typing'
import { Button, BaseModal } from '@/components/ui'
import { useDisclosure } from '@/hooks/utils'

import { generateRandomWords } from './util'

export const TopPage = () => {
  const { isOpen, open, close } = useDisclosure()
  return (
    <main>
      <div>
        <Button onClick={open}>始める</Button>
        <BaseModal isOpen={isOpen} onClose={close}>
          <div className={clsx('min-h-[50vh]')}>
            <TypingBoard questions={generateRandomWords(5)} />
          </div>
        </BaseModal>
      </div>
    </main>
  )
}
