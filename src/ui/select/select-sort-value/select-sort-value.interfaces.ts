import { ChangeEventHandler } from 'react'
import { SortListOptions } from '@lib/redux/reducers/slices/query'

export interface SelectSortValueProps {
  valueFirst: SortListOptions
  valueSecond: SortListOptions
  id: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  sortValue: string
}
