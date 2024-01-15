import { FC } from 'react'
import styles from './content.module.css'
import { useContentData } from './hooks'
import { ArticleCard } from '@components/article-card'

export const Content: FC = () => {
  const { articles, lastArticleRef } = useContentData()
  return (
    <div className={styles.containerContent}>
      <div className={styles.wrapperContent}>
        {articles.map((article, index, array) => (
          <ArticleCard
            key={article.id}
            ref={index === array.length - 1 ? lastArticleRef : null}
            id={article.id}
            webTitle={article.webTitle}
            webPublicationDate={article.webPublicationDate}
            blocks={article.blocks}
            apiUrl={article.apiUrl}
          />
        ))}
      </div>
    </div>
  )
}
