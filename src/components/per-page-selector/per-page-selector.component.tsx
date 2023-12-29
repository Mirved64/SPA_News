import { ChangeEvent, FC, useMemo } from 'react'
import { PerPageSelectorProps } from './per-page-selector.interfaces'
import styles from './per-page-selector.styles.module.css'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { SelectArticlesPerPage } from '@ui/select'
import { useAppDispatch } from '@utils/hooks'

export const PerPageSelector: FC<PerPageSelectorProps> = ({
  id,
  perPageValue,
  setPerPageValue,
  keyWords,
  sortValue,
}) => {
  const dispatch = useAppDispatch()
  const currentKeywords = useMemo(() => keyWords, [keyWords])
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (currentKeywords.length !== 0) {
      setPerPageValue(event.target.value)
      dispatch(
        fetchArticlesByKeywords({
          keyWords: currentKeywords,
          sortValue,
          perPageValue: perPageValue,
        }),
      ).finally(() => setPerPageValue(event.target.value))
    } else {
      setPerPageValue(event.target.value)
      dispatch(
        fetchArticles({
          perPageValue: perPageValue,
          sortValue,
        }),
      )
    }
  }
  return (
    <div className={styles.wrapperPerPageSelector}>
      <SelectArticlesPerPage id={id} onChange={handleChange} perPageValue={perPageValue} />
    </div>
  )
}
