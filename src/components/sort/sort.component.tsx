import { ChangeEvent, FC } from 'react'
import { SortListOptions, SortProps } from './sort.interfaces'
import styles from './sort.styles.module.css'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { Select } from '@ui/select'
import { useAppDispatch } from '@utils/hooks'

export const Sort: FC<SortProps> = ({
  id,
  valueFirst,
  valueSecond,
  keyWords,
  setSortValue,
  sortValue,
}) => {
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (keyWords.length !== 0) {
      dispatch(fetchArticlesByKeywords({ keyWords, sortValue: event.target.value })).then(() =>
        setSortValue(() => event.target.value),
      )
    } else {
      setSortValue(SortListOptions.byNewest)
      dispatch(fetchArticles({ sortValue: SortListOptions.byNewest }))
    }
  }
  return (
    <div className={styles.wrapper}>
      <Select
        valueFirst={valueFirst}
        valueSecond={valueSecond}
        id={id}
        onChange={handleChange}
        sortValue={sortValue}
      />
    </div>
  )
}
