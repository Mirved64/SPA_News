import { ChangeEvent, ChangeEventHandler } from 'react'
import { SortListOptions } from '@components/sort'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const useSortData = (): {
  handleChange: ChangeEventHandler<HTMLSelectElement>
  sortValue: string
} => {
  const dispatch = useAppDispatch()
  const { keyWords, sortValue, perPageValue } = useAppSelector((state) => state.query)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (keyWords.length !== 0) {
      dispatch(querySlice.actions.setSortValue(event.target.value))
      dispatch(
        fetchArticlesByKeywords({
          keyWords,
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
    } else {
      dispatch(querySlice.actions.setSortValue(SortListOptions.byNewest))
      dispatch(
        fetchArticles({
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
    }
  }
  return {
    handleChange,
    sortValue,
  }
}
