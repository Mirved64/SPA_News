import { FC } from 'react'
import { useSortData } from './hooks'
import { SortProps } from './sort.interfaces'
import styles from './sort.module.css'
import { SelectSortValue } from '@ui/select'

export const Sort: FC<SortProps> = ({ id }) => {
  const { handleChange, sortValue } = useSortData()
  return (
    <div className={styles.wrapperSort}>
      <SelectSortValue
        valueFirst={'newest'}
        valueSecond={'relevance'}
        id={id}
        onChange={handleChange}
        sortValue={sortValue}
      />
    </div>
  )
}
