import { Dispatch, SetStateAction } from 'react'

export interface SearchProps {
  reachedBottom: boolean
  setReachedBottom: Dispatch<SetStateAction<boolean>>
  keyWords: string
  setKeyWords: Dispatch<SetStateAction<string>>
  sortValue: string
  setSortValue: Dispatch<SetStateAction<string>>
}
