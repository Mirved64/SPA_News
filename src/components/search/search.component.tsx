import { FC } from 'react'
import { useIntl } from 'react-intl'
import styles from './search.styles.module.css'
import { useSearchData } from '@components/search/hooks'
import { SearchProps } from '@components/search/search.interfaces'
import { ButtonSearch } from '@ui/button'
import { SearchInput } from '@ui/input'

export const Search: FC<SearchProps> = ({ reachedBottom, setReachedBottom }) => {
  const { formatMessage } = useIntl()
  const { handleSubmit, handleChange } = useSearchData({ reachedBottom, setReachedBottom })
  return (
    <div className={styles.wrapperSearch}>
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
