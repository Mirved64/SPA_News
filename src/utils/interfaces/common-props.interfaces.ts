import { Dispatch, SetStateAction } from 'react'

export interface CommonProps {
  reachedBottom: boolean
  setReachedBottom: Dispatch<SetStateAction<boolean>>
  keyWords: string
  setKeyWords?: Dispatch<SetStateAction<string>>
}
