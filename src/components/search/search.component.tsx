import { FC } from 'react'
import { useIntl } from 'react-intl'
import styles from './search.styles.module.css'
import { useSearchData } from '@components/search/hooks'
import { ButtonSearch } from '@ui/button'
import { SearchInput } from '@ui/input'
import { CommonProps } from '@utils/interfaces'

export const Search: FC<CommonProps> = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  setKeyWords,
}) => {
  const { formatMessage } = useIntl()
  const { handleSubmit, handleChange } = useSearchData({
    reachedBottom,
    setReachedBottom,
    keyWords,
    setKeyWords,
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
