export type SortListOptions = 'newest' | 'relevance'

export interface QueryState {
  keyWords: string | null
  pageNumber: number
  sortValue: SortListOptions | string
  perPageValue: number
}
