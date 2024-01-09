import { Dispatch, SetStateAction } from 'react'

export interface SearchProps {
  reachedBottom: boolean
  setReachedBottom: Dispatch<SetStateAction<boolean>>
}
