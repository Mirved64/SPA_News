import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export const usePageBottom = (): [
  reachedBottom: boolean,
  setReachedBottom: Dispatch<SetStateAction<boolean>>,
] => {
  const [reachedBottom, setReachedBottom] = useState<boolean>(false)

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight
    const innerHeight = window.innerHeight
    const scrollTop = document.documentElement.scrollTop

    if (scrollHeight - (innerHeight + scrollTop) < 100) {
      setReachedBottom(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return [reachedBottom, setReachedBottom]
}
