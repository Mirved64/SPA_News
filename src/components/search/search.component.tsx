import { FC } from 'react'
import { useIntl } from 'react-intl'
import { useSearchData } from './hooks'
import styles from './search.module.css'
import { ButtonSearch } from '@ui/button'
import { SearchInput } from '@ui/input'

export const Search: FC = () => {
  const { formatMessage } = useIntl()
  const { handleSubmit, handleChange } = useSearchData()
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
