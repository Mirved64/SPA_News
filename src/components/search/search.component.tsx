import { FC } from 'react'
import { useIntl } from 'react-intl'
import { SearchProps } from './search.interfaces'
import styles from './search.styles.module.css'
import { useSearchData } from '@components/search/hooks'
import { ButtonSearch } from '@ui/button'
import { SearchInput } from '@ui/input'

export const Search: FC<SearchProps> = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  setKeyWords,
  sortValue,
  setSortValue,
}) => {
  const { formatMessage } = useIntl()
  const { handleSubmit, handleChange } = useSearchData({
    reachedBottom,
    setReachedBottom,
    keyWords,
    setKeyWords,
    sortValue,
    setSortValue,
  })
  return (
    <div className={styles.wrapper}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <div className={styles.searchInput}>
          <SearchInput
            onChange={handleChange}
            placeholder={formatMessage({ id: 'search.input.placeholder' })}
          />
        </div>
        <div className={styles.searchButton}>
          <ButtonSearch text={formatMessage({ id: 'search.button.text' })} />
        </div>
      </form>
    </div>
  )
}
