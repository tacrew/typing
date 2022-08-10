import { hideOthers } from 'aria-hidden'
import { RefObject, useEffect } from 'react'

export const useAriaHidden = (
  ref: RefObject<HTMLElement>,
  isOpen: boolean
): void => {
  useEffect(() => {
    if (!isOpen || ref.current === null) {
      return
    }

    return hideOthers(ref.current)
  }, [ref, isOpen])
}
