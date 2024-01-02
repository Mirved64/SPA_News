import { Dispatch, SetStateAction } from 'react'

export interface ContentProps {
  reachedBottom: boolean
  setReachedBottom: Dispatch<SetStateAction<boolean>>
  keyWords: string
}
