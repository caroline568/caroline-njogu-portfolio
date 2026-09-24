import { useEffect } from 'react'

/** Sets the browser tab title for the current page. */
export function useTitle(title) {
  useEffect(() => {
    document.title = title
  }, [title])
}
