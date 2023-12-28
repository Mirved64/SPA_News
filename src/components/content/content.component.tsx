import { FC } from 'react'
import { ContentProps } from './content.interfaces'
import styles from './content.styles.module.css'
import { useContentData } from './hooks'
import { ArticleCard } from '@components/article-card'

export const Content: FC<ContentProps> = ({
  reachedBottom,
  setReachedBottom,
  keyWords,
  sortValue,
}) => {
  const articles = useContentData({ reachedBottom, setReachedBottom, keyWords, sortValue })
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
