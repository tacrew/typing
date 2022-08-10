import clsx from 'clsx'

import type { DataRowProps } from './type'

export const DataRow = ({ label, value }: DataRowProps) => {
  return (
    <dl className={clsx('flex items-center space-x-4')}>
      <dt className={clsx('w-32')}>{label}</dt>
      <dd>{value}</dd>
    </dl>
  )
}
