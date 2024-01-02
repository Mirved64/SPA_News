import { Dispatch, SetStateAction } from 'react'

export enum SortListOptions {
  byNewest = 'newest',
  byRelevance = 'relevance',
}

export interface SortProps {
  keyWords: string
  valueFirst: SortListOptions.byNewest
  valueSecond: SortListOptions.byRelevance
  sortValue: string
  id: string
  setSortValue: Dispatch<SetStateAction<string>>
}
