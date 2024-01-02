import { FC } from 'react'
import { SortListOptions, SortProps } from './sort.interfaces'
import styles from './sort.styles.module.css'
import { useSortData } from '@components/sort/hooks'
import { SelectSortValue } from '@ui/select/select-sort-value'

export const Sort: FC<SortProps> = ({ id }) => {
  const { handleChange, sortValue } = useSortData()
  return (
    <div className={styles.wrapperSort}>
      <SelectSortValue
        valueFirst={SortListOptions.byNewest}
        valueSecond={SortListOptions.byRelevance}
        id={id}
        onChange={handleChange}
        sortValue={sortValue}
      />
    </div>
  )
}
