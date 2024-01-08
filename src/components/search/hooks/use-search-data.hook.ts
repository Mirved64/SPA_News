import { ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySate, querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const useSearchData = (): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const { keyWords, sortValue, perPageValue } = useAppSelector(querySate)
  const debounced = useDebouncedCallback((keyWords: string) => {
    dispatch(querySlice.actions.setKeyWords(keyWords))
  }, 300)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value)
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords !== null && keyWords.length !== 0) {
      dispatch(querySlice.actions.resetPageNumber())
      dispatch(
        fetchArticlesByKeywords({
          keyWords: keyWords,
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      ).then(() => dispatch(querySlice.actions.setPageNumber()))
    } else if (keyWords === null || keyWords.length === 0) {
      dispatch(querySlice.actions.resetPageNumber())
      dispatch(querySlice.actions.setSortValue('newest'))
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
    handleSubmit,
  }
}
