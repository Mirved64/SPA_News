import { ChangeEvent, ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react'
import {
  fetchArticles,
  fetchArticlesByKeywords,
  fetchNextArticlesByKeywords,
} from '@lib/redux/reducers/actions'
import { useAppDispatch } from '@utils/hooks'
import { CommonProps } from '@utils/interfaces'

export const useSearchData = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  setKeyWords,
}: CommonProps): {
  handleSubmit: FormEventHandler<HTMLFormElement>
  handleChange: ChangeEventHandler<HTMLInputElement>
} => {
  const dispatch = useAppDispatch()
  const [pageNumber, setPageNumber] = useState<number>(1)
  useEffect(() => {
    if (keyWords.length !== 0 && reachedBottom) {
      dispatch(fetchNextArticlesByKeywords({ keyWords, pageNumber: pageNumber.toString() }))
        .then(() => setPageNumber((prevState) => prevState + 1))
        .finally(() => setReachedBottom(false))
    }
  }, [reachedBottom, setReachedBottom, setPageNumber, pageNumber, dispatch, keyWords])
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setKeyWords!(() => event.target.value.trim().toLowerCase().split(' ').join(''))
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (keyWords !== '') {
      dispatch(fetchArticlesByKeywords(keyWords))
    } else {
      dispatch(fetchArticles())
    }
  }
  return {
    handleChange,
    handleSubmit,
  }
}
