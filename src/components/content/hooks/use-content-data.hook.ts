import { useEffect, useLayoutEffect } from 'react'
import { ContentProps } from '../content.interfaces'
import { SortListOptions } from '@components/sort'
import { fetchArticles, fetchNextArticles } from '@lib/redux/reducers/actions'
import { useAppDispatch, useAppSelector } from '@utils/hooks'
import { Article } from '@utils/interfaces'

export const useContentData = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  sortValue,
}: ContentProps): Article[] => {
  const dispatch = useAppDispatch()
  const { articles } = useAppSelector((state) => state.articles)
  useLayoutEffect(() => {
    dispatch(fetchArticles({ sortValue }))
  }, [dispatch, sortValue])
  let lastArticleId = articles[articles.length - 1]?.id
  useEffect(() => {
    if (keyWords.length === 0 && lastArticleId && reachedBottom) {
      dispatch(
        fetchNextArticles({ articleId: lastArticleId, sortValue: SortListOptions.byNewest }),
      ).finally(() => setReachedBottom(false))
    }
  }, [reachedBottom, setReachedBottom, lastArticleId, dispatch, keyWords])
  return articles
}
