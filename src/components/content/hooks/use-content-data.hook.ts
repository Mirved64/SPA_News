import { useEffect } from 'react'
import { ContentProps } from '../content.interfaces'
import { SortListOptions } from '@components/sort'
import { fetchArticles, fetchNextArticles } from '@lib/redux/reducers/actions'
import { querySlice } from '@lib/redux/reducers/slices/query'
import { useAppDispatch, useAppSelector } from '@utils/hooks'
import { Article } from '@utils/interfaces'

export const useContentData = ({ reachedBottom, setReachedBottom }: ContentProps): Article[] => {
  const dispatch = useAppDispatch()
  const { articles } = useAppSelector((state) => state.articles)
  const { articleId, keyWords, perPageValue, sortValue } = useAppSelector((state) => state.query)
  useEffect(() => {
    if (keyWords.length === 0) {
      dispatch(fetchArticles({ sortValue, perPageValue: perPageValue.toString() }))
    }
  }, [dispatch, perPageValue, sortValue, keyWords.length])
  dispatch(querySlice.actions.setArticleId(articles[articles.length - 1]?.id))
  useEffect(() => {
    if (keyWords.length === 0 && reachedBottom) {
      dispatch(querySlice.actions.setSortValue(SortListOptions.byNewest))
      dispatch(
        fetchNextArticles({
          articleId,
          sortValue,
          perPageValue: perPageValue.toString(),
        }),
      ).finally(() => {
        setReachedBottom(false)
      })
    }
  }, [
    dispatch,
    articleId,
    keyWords.length,
    perPageValue,
    reachedBottom,
    setReachedBottom,
    sortValue,
  ])
  return articles
}
