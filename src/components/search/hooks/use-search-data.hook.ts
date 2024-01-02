import { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { SearchProps } from '@components/search/search.interfaces'
import { SortListOptions } from '@components/sort'
import {
  fetchArticles,
  fetchArticlesByKeywords,
  fetchNextArticlesByKeywords,
} from '@lib/redux/reducers/actions'
import { querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'

export const useSearchData = ({
  reachedBottom,
  setReachedBottom,
}: SearchProps): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const { keyWords, pageNumber, sortValue, perPageValue } = useAppSelector((state) => state.query)
  const debounced = useDebouncedCallback((keyWords: string) => {
    dispatch(
      querySlice.actions.setKeyWords(
        keyWords.trim().toLowerCase().replace(/\s/g, '%20').replace(/,%20/g, '%20AND%20'),
      ),
    )
  }, 300)
  useEffect(() => {
    if (keyWords.length !== 0 && reachedBottom) {
      dispatch(
        fetchNextArticlesByKeywords({
          keyWords,
          pageNumber: pageNumber.toString(),
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
        .then(() => dispatch(querySlice.actions.setPageNumber()))
        .finally(() => setReachedBottom(false))
    }
  }, [dispatch, keyWords, pageNumber, sortValue, perPageValue, reachedBottom, setReachedBottom])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(event.target.value)
  }
  console.log(keyWords)
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords.length !== 0) {
      dispatch(querySlice.actions.setSortValue(SortListOptions.byRelevance))
      dispatch(
        fetchArticlesByKeywords({
          keyWords,
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      )
    } else if (keyWords.length === 0) {
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
    handleSubmit,
  }
}
