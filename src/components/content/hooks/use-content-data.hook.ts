import { useIntersectionObserver } from '@uidotdev/usehooks'
import { useEffect } from 'react'
import {
  fetchArticles,
  fetchNextArticles,
  fetchNextArticlesByKeywords,
} from '@lib/redux/reducers/actions'
import { articlesState } from '@lib/redux/reducers/slices/articles'
import { querySate, querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'
import { Article } from '@utils/interfaces'

export const useContentData = (): {
  articles: Article[]
  lastArticleRef: (instance: Element | null) => void
} => {
  const dispatch = useAppDispatch()
  const { articles, status } = useAppSelector(articlesState)
  const { sortValue, perPageValue, keyWords, pageNumber } = useAppSelector(querySate)
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchArticles({ sortValue, perPageValue: perPageValue.toString() }))
    }
  }, [dispatch, perPageValue, sortValue, status])
  const [lastArticleRef, entry] = useIntersectionObserver({
    threshold: 0.5,
  })
  let lastArticleId = articles[articles.length - 1]?.id
  useEffect(() => {
    if (entry?.isIntersecting && (keyWords === null || keyWords.length === 0)) {
      dispatch(
        fetchNextArticles({ lastArticleId, sortValue, perPageValue: perPageValue.toString() }),
      )
    }
    if (entry?.isIntersecting && keyWords !== null && keyWords.length !== 0) {
      dispatch(
        fetchNextArticlesByKeywords({
          keyWords,
          pageNumber: pageNumber.toString(),
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      ).then(() => dispatch(querySlice.actions.setPageNumber()))
    }
  }, [dispatch, entry?.isIntersecting, keyWords, perPageValue, sortValue])
  return { articles, lastArticleRef }
}
