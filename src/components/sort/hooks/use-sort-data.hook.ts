import { ChangeEvent, ChangeEventHandler } from 'react'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySate, querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const useSortData = (): {
  handleChange: ChangeEventHandler<HTMLSelectElement>
  sortValue: string
} => {
  const dispatch = useAppDispatch()
  const { keyWords, sortValue, perPageValue } = useAppSelector(querySate)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (keyWords !== null && keyWords.length !== 0) {
      dispatch(querySlice.actions.setSortValue(event.target.value))
      dispatch(
        fetchArticlesByKeywords({
          keyWords: keyWords,
          sortValue: event.target.value,
          perPageValue: perPageValue.toString(),
        }),
      )
    } else if (keyWords === null || keyWords.length === 0) {
      dispatch(querySlice.actions.setSortValue('newest'))
      dispatch(
        fetchArticles({
          sortValue: 'newest',
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
