import { ChangeEvent, FC, FormEventHandler, useState } from 'react'
import { useIntl } from 'react-intl'
import styles from './search.styles.module.css'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { ButtonSearch } from '@ui/button'
import { SearchInput } from '@ui/input'
import { useAppDispatch } from '@utils/hooks'

export const Search: FC = () => {
  const { formatMessage } = useIntl()
  const dispatch = useAppDispatch()
  const [keyWords, setKeywords] = useState<string>('')
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeywords(event.target.value.trim().toLowerCase().split(' ').join(''))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords !== '') {
      dispatch(fetchArticlesByKeywords(keyWords))
    } else {
      dispatch(fetchArticles())
    }
  }

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
