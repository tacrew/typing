import clsx from 'clsx'

export const IconLoading = () => {
  return (
    <div
      className={clsx(
        'h-full w-full',
        'animate-spin',
        'rounded-full border-2 border-gray-400 border-t-transparent'
      )}
    />
  )
}
