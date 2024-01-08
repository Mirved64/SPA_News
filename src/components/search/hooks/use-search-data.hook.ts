import { ChangeEvent, ChangeEventHandler, FormEventHandler, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { getKeywordsString } from '@components/search/helpers'
import { fetchArticles, fetchArticlesByKeywords } from '@lib/redux/reducers/actions'
import { querySate, querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const useSearchData = (): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const [currentKeywords, setCurrentKeyWords] = useState<string | null>(null)
  const { keyWords, sortValue, perPageValue } = useAppSelector(querySate)
  const debounced = useDebouncedCallback((keyWords: string) => {
    setCurrentKeyWords(getKeywordsString(keyWords))
  }, 300)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value)
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    dispatch(querySlice.actions.setKeyWords(currentKeywords))
    if (currentKeywords !== null && currentKeywords.length !== 0) {
      dispatch(querySlice.actions.setSortValue('relevance'))
      dispatch(querySlice.actions.resetPageNumber())
      dispatch(
        fetchArticlesByKeywords({
          keyWords: currentKeywords,
          sortValue: 'relevance',
          perPageValue: perPageValue.toString(),
        }),
      ).then(() => dispatch(querySlice.actions.setPageNumber()))
    } else if (currentKeywords === null || currentKeywords.length === 0) {
      dispatch(querySlice.actions.resetPageNumber())
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
    handleSubmit,
  }
}
