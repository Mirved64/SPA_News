import { FC } from 'react'
import styles from './content.styles.module.css'
import { useContentData } from './hooks'
import { ArticleCard } from '@components/article-card'
import { CommonProps } from '@utils/interfaces'

export const Content: FC<CommonProps> = ({ reachedBottom, setReachedBottom, keyWords }) => {
  const articles = useContentData({ reachedBottom, setReachedBottom, keyWords })
  return (
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
  )
}