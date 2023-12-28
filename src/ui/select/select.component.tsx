import { FC } from 'react'
import { useIntl } from 'react-intl'
import styles from './select.styles.module.css'
import { SortListOptions } from '@components/sort'
import { SelectProps } from '@ui/select/select.interface'

export const Select: FC<SelectProps> = ({ id, valueFirst, valueSecond, onChange, sortValue }) => {
  const { formatMessage } = useIntl()
  return (
    <select
      id={id}
      className={styles.select}
      onChange={onChange}
      defaultValue={SortListOptions.byNewest}
      value={sortValue}
    >
      <option value={valueFirst} selected>
        {formatMessage({ id: 'sort.by-newest' })}
      </option>
      <option value={valueSecond}>{formatMessage({ id: 'sort.by-relevance' })}</option>
    </select>
  )
}
