import { ChangeEvent } from 'react'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySate, querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const usePerPageSelectorData = (): {
  handleChange: (events: ChangeEvent<HTMLSelectElement>) => void
  perPageValue: number
} => {
  const dispatch = useAppDispatch()
  const { keyWords, sortValue, perPageValue } = useAppSelector(querySate)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(querySlice.actions.resetPageNumber())
    dispatch(querySlice.actions.setPerPageValue(Number(event.target.value)))
    if (keyWords !== null && keyWords.length !== 0) {
      dispatch(
        fetchArticlesByKeywords({
          keyWords: keyWords,
          sortValue: sortValue,
          perPageValue: event.target.value,
        }),
      )
    } else if (keyWords === null || keyWords.length === 0) {
      dispatch(
        fetchArticles({
          sortValue: sortValue,
          perPageValue: event.target.value,
        }),
      )
    }
  }
  return { handleChange, perPageValue }
}
