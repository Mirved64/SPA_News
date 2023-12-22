'use client'
import { useEffect } from 'react'
import { ArticleCard } from '@components/article-card'
import { fetchArticles } from '@lib/redux'
import { useAppDispatch, useAppSelector } from '@utils'

const Home = () => {
  const dispatch = useAppDispatch()
  const { articles, isLoading } = useAppSelector((state) => state.articleReducer)

  useEffect(() => {
    dispatch(fetchArticles())
  }, [dispatch])

  return (
    <>
      {isLoading && <h1>Wait please!</h1>}
      {articles &&
        articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            apiUrl={article.apiUrl}
            webTitle={article.webTitle}
            webPublicationDate={article.webPublicationDate}
            blocks={article.blocks}
          />
        ))}
    </>
  )
}

export default Home
