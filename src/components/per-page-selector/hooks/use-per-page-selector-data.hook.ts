import { ChangeEvent } from 'react'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const usePerPageSelectorData = (): {
  handleChange: (events: ChangeEvent<HTMLSelectElement>) => void
  perPageValue: number
} => {
  const dispatch = useAppDispatch()
  const { keyWords, sortValue, perPageValue } = useAppSelector((state) => state.query)
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(querySlice.actions.resetPageNumber())
    if (keyWords.length !== 0) {
      dispatch(querySlice.actions.setPerPageValue(Number(event.target.value)))
      dispatch(
        fetchArticlesByKeywords({
          keyWords,
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
    } else {
      dispatch(querySlice.actions.setPerPageValue(Number(event.target.value)))
      dispatch(
        fetchArticles({
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
    }
  }
  return { handleChange, perPageValue }
}
