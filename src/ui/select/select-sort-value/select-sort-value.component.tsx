import { FC } from 'react'
import { useIntl } from 'react-intl'
import { SelectSortValueProps } from './select-sort-value.interfaces'
import styles from './select-sort-value.styles.module.css'

export const SelectSortValue: FC<SelectSortValueProps> = ({
  id,
  valueFirst,
  valueSecond,
  onChange,
  sortValue,
}) => {
  const { formatMessage } = useIntl()
  return (
    <select id={id} className={styles.selectSort} onChange={onChange} value={sortValue}>
      <option value={valueFirst}>{formatMessage({ id: 'sort.by-newest' })}</option>
      <option value={valueSecond}>{formatMessage({ id: 'sort.by-relevance' })}</option>
    </select>
  )
}
