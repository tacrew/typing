import { useCallback } from 'react'

export const useAutoFocus = () => {
  const elementRef = useCallback((element: HTMLElement | null) => {
    if (element) {
      element.focus()
    }
  }, [])

  return elementRef
}
