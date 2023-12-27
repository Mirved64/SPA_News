import { useEffect, useLayoutEffect } from 'react'
import { fetchArticles, fetchNextArticles } from '@lib/redux/reducers/actions'
import { useAppDispatch, useAppSelector } from '@utils/hooks'
import { Article, CommonProps } from '@utils/interfaces'

export const useContentData = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
}: CommonProps): Article[] => {
  const dispatch = useAppDispatch()
  const { articles } = useAppSelector((state) => state.articles)
  useLayoutEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])
  let lastArticleId = articles[articles.length - 1]?.id
  useEffect(() => {
    if (keyWords.length === 0 && lastArticleId && reachedBottom) {
      dispatch(fetchNextArticles(lastArticleId)).finally(() => setReachedBottom(false))
    }
  }, [reachedBottom, setReachedBottom, lastArticleId, dispatch, keyWords])
  return articles
}
