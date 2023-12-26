'use client'
import { useEffect } from 'react'
import styles from './styles.module.css'

import { ArticleCard } from '@components/article-card'
import { fetchArticles, fetchNextArticles } from '@lib/redux'
import { Condition } from '@ui'
import { useAppDispatch, useAppSelector } from '@utils'

const Home = () => {
  const dispatch = useAppDispatch()
  const { articles, isLoading } = useAppSelector((state) => state.articles)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  let lastArticleId = articles[articles.length - 1]?.id

  const getNextArticles = () => {
    dispatch(fetchNextArticles(lastArticleId))
  }

  return (
    <>
      <div className={styles.wrapperContent}>
        <Condition match={!isLoading}>
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              id={article.id}
              webTitle={article.webTitle}
              webPublicationDate={article.webPublicationDate}
              blocks={article.blocks}
            />
          ))}
        </Condition>
      </div>
      <button onClick={getNextArticles}>Click</button>
    </>
  )
}

export default Home
