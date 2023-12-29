import { Dispatch, SetStateAction } from 'react'

export interface PerPageSelectorProps {
  id: string
  perPageValue: string
  setPerPageValue: Dispatch<SetStateAction<string>>
  keyWords: string
  sortValue: string
}
