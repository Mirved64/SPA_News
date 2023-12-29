import { ChangeEvent, FC, useMemo } from 'react'
import { SortListOptions, SortProps } from './sort.interfaces'
import styles from './sort.styles.module.css'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { SelectSortValue } from '@ui/select'
import { useAppDispatch } from '@utils/hooks'

export const Sort: FC<SortProps> = ({
  id,
  valueFirst,
  valueSecond,
  keyWords,
  setSortValue,
  sortValue,
  perPageValue,
}) => {
  const dispatch = useAppDispatch()
  const currentKeywords = useMemo(() => keyWords, [keyWords])
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (currentKeywords.length !== 0) {
      setSortValue(event.target.value)
      dispatch(
        fetchArticlesByKeywords({
          keyWords: currentKeywords,
          sortValue: event.target.value,
          perPageValue,
        }),
      ).finally(() => setSortValue(event.target.value))
    } else {
      setSortValue(SortListOptions.byNewest)
      dispatch(
        fetchArticles({
          sortValue: SortListOptions.byNewest,
          perPageValue,
        }),
      )
    }
  }
  return (
    <div className={styles.wrapperSort}>
      <SelectSortValue
        valueFirst={valueFirst}
        valueSecond={valueSecond}
        id={id}
        onChange={handleChange}
        sortValue={sortValue}
      />
    </div>
  )
}
