import { SortListOptions } from '@lib/redux/reducers/slices/query'

export interface Query {
  sortValue?: SortListOptions | string
  perPageValue?: string
  keyWords?: string | null
  lastArticleId?: string | null
  pageNumber?: string
}
