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
  perPageValue,
}: ContentProps): Article[] => {
  const dispatch = useAppDispatch()
  const { articles } = useAppSelector((state) => state.articles)
  useLayoutEffect(() => {
    dispatch(fetchArticles({ sortValue: SortListOptions.byNewest, perPageValue }))
  }, [dispatch, perPageValue])
  useEffect(() => {
    let lastArticleId = articles[articles.length - 1]?.id
    if (keyWords.length === 0 && lastArticleId && reachedBottom) {
      dispatch(
        fetchNextArticles({
          articleId: lastArticleId,
          sortValue: SortListOptions.byNewest,
          perPageValue,
        }),
      ).finally(() => setReachedBottom(false))
    }
  }, [reachedBottom, setReachedBottom, dispatch, keyWords, articles, perPageValue])
  return articles
}
