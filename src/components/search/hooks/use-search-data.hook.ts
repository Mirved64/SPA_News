import { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { SearchProps } from '../search.interfaces'
import { SortListOptions } from '@components/sort'
import {
  fetchArticles,
  fetchArticlesByKeywords,
  fetchNextArticlesByKeywords,
} from '@lib/redux/reducers/actions'
import { useAppDispatch } from '@utils/hooks'

export const useSearchData = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  setKeyWords,
  sortValue,
  setSortValue,
  perPageValue,
}: SearchProps): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const debounced = useDebouncedCallback((keyWords) => {
    setKeyWords!(keyWords)
  }, 1000)
  const [pageNumber, setPageNumber] = useState<number>(2)
  useEffect(() => {
    if (keyWords.length !== 0 && reachedBottom) {
      dispatch(
        fetchNextArticlesByKeywords({
          keyWords,
          pageNumber: pageNumber.toString(),
          sortValue,
          perPageValue,
        }),
      )
        .then(() => setPageNumber((prevState) => prevState + 1))
        .finally(() => setReachedBottom(false))
    }
  }, [
    reachedBottom,
    setReachedBottom,
    setPageNumber,
    pageNumber,
    dispatch,
    keyWords,
    sortValue,
    perPageValue,
  ])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    debounced(
      event.target.value.trim().toLowerCase().replace(/\s/g, '%20').replace(/,%20/g, '%20AND%20'),
    )
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords.length !== 0) {
      dispatch(
        fetchArticlesByKeywords({
          keyWords,
          sortValue: SortListOptions.byRelevance,
          perPageValue,
        }),
      ).then(() => setSortValue(SortListOptions.byRelevance))
    } else {
      dispatch(
        fetchArticles({
          sortValue: SortListOptions.byNewest,
          perPageValue,
        }),
      ).then(() => setSortValue(SortListOptions.byNewest))
    }
  }
  return {
    handleChange,
    handleSubmit,
  }
}
