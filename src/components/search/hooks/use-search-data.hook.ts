import { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'
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
}: SearchProps): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const [pageNumber, setPageNumber] = useState<number>(1)
  useEffect(() => {
    if (keyWords.length !== 0 && reachedBottom) {
      dispatch(
        fetchNextArticlesByKeywords({
          keyWords,
          pageNumber: pageNumber.toString(),
          sortValue,
        }),
      )
        .then(() => setPageNumber((prevState) => prevState + 1))
        .finally(() => setReachedBottom(false))
    }
  }, [reachedBottom, setReachedBottom, setPageNumber, pageNumber, dispatch, keyWords, sortValue])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWords!(() => event.target.value.trim().toLowerCase().split(' ').join(''))
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords.length !== 0) {
      dispatch(fetchArticlesByKeywords({ keyWords, sortValue: SortListOptions.byRelevance })).then(
        () => setSortValue(SortListOptions.byRelevance),
      )
    } else {
      dispatch(fetchArticles({ sortValue: SortListOptions.byNewest })).then(() =>
        setSortValue(SortListOptions.byNewest),
      )
    }
  }
  return {
    handleChange,
    handleSubmit,
  }
}
