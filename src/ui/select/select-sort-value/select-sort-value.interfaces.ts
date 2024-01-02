import { ChangeEventHandler } from 'react'
import { SortListOptions } from '@components/sort'

export interface SelectSortValueProps {
  valueFirst: SortListOptions.byNewest
  valueSecond: SortListOptions.byRelevance
  id: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  sortValue: string
}
