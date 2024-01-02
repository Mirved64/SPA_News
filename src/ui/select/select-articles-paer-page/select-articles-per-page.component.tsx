import { FC } from 'react'
import { useIntl } from 'react-intl'
import { SelectArticlesPerPageProps } from './select-articles-per-page-value.interfaces'
import styles from './select-articles-per-page-value.styles.module.css'

export const SelectArticlesPerPage: FC<SelectArticlesPerPageProps> = ({
  id,
  perPageValue,
  onChange,
}) => {
  const { formatMessage } = useIntl()
  let minArticlesPerPage: number = 10
  const array: number[] = []
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
