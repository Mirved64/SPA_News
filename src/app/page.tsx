'use client'
import { useEffect, useLayoutEffect } from 'react'
import styles from './styles.module.css'

import { ArticleCard } from '@components/article-card'
import { Search } from '@components/search'
import { fetchArticles, fetchNextArticles } from '@lib/redux/reducers/actions'
import { useAppDispatch, useAppSelector, usePageBottom } from '@utils/hooks'

const Home = () => {
  const dispatch = useAppDispatch()
  const [pageBottom, setPageBottom] = usePageBottom()
  const { articles } = useAppSelector((state) => state.articles)

  useLayoutEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  let lastArticleId = articles[articles.length - 1]?.id

  useEffect(() => {
    lastArticleId &&
      pageBottom &&
      dispatch(fetchNextArticles(lastArticleId)).finally(() => setPageBottom(false))
  }, [pageBottom, setPageBottom, lastArticleId, dispatch])

  return (
    <main>
      <Search />
      <div className={styles.wrapperContent}>
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            webTitle={article.webTitle}
            webPublicationDate={article.webPublicationDate}
            blocks={article.blocks}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
