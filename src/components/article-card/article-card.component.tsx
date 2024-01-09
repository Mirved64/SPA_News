import Image from 'next/image'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { useIntl } from 'react-intl'
import { ArticleCardProps } from './article-card.interfaces'
import styles from './article-card.styles.module.css'
import { useCardData } from './hooks'
import { ButtonPrimary } from '@ui/button'

const ArticleCardWithoutRef: ForwardRefRenderFunction<HTMLDivElement, ArticleCardProps> = (
  { id, webTitle, webPublicationDate, blocks },
  ref,
) => {
  const { formatMessage } = useIntl()
  const { imgSrc, imgAlt, articleDate } = useCardData(blocks?.main?.bodyHtml, webPublicationDate)
  return (
    <div className={styles.wrapperArticle} ref={ref}>
      <div className={styles.wrapperContent} id={id}>
        <div className={styles.wrapperImage}>
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={100}
            height={100}
            style={{ width: '100%', height: 'auto' }}
            quality={100}
            placeholder='empty'
            loading={'lazy'}
          />
        </div>
        <div className={styles.wrapperInfo}>
          <div className={styles.wrapperInfoDate}>
            <span className={styles.infoDate}>
              {formatMessage({ id: 'card.web-publication-date' })} {articleDate}
            </span>
          </div>
          <div className={styles.wrapperInfoTitle}>
            <span className={styles.infoTitle}>{webTitle}</span>
          </div>
          <div>
            <ButtonPrimary text={formatMessage({ id: 'article-card.details' })} />
          </div>
        </div>
      </div>
    </div>
  )
}

export const ArticleCard = forwardRef<HTMLDivElement, ArticleCardProps>(ArticleCardWithoutRef)
