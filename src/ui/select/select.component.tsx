import { FC, useMemo } from 'react'
import { useIntl } from 'react-intl'
import { SelectArticlesPerPageProps, SelectSortValueProps } from './select.interface'
import styles from './select.styles.module.css'

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

export const SelectArticlesPerPage: FC<SelectArticlesPerPageProps> = ({
  id,
  perPageValue,
  onChange,
}) => {
  const { formatMessage } = useIntl()
  let minArticlesPerPage: number = 10
  const array: number[] = useMemo(() => [], [])
  while (array.length < 50) {
    array.push(minArticlesPerPage++)
  }
  return (
    <>
      <label htmlFor={id} className={styles.label}>
        {formatMessage({ id: 'per-page.articles-per-page' })}
      </label>
      <select id={id} className={styles.selectPerPage} onChange={onChange} value={perPageValue}>
        {array.map((element) => (
          <option key={element} value={element}>
            {element.toString()}
          </option>
        ))}
      </select>
    </>
  )
}
