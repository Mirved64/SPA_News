import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ArticleCardProps } from './article-card.interfaces'
import styles from './article-card.styles.module.css'
import { getImgAlt, getImgSrc } from '@components/article-card/helpers'

export const ArticleCard: FC<ArticleCardProps> = ({
  id,
  apiUrl,
  webTitle,
  webPublicationDate,
  blocks,
}) => {
  const imgSrc: string = getImgSrc(blocks)
  const imgAlt: string = getImgAlt(blocks)

  return (
    <div className={styles.wrapper} id={id}>
      <div className={styles.wrapperImage}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={100}
          height={100}
          style={{ width: '100%', height: '100%' }}
          priority
        />
      </div>
      <div className={styles.wrapperInfo}>
        <div className={styles.wrapperInfoDate}>
          <span className={styles.infoDate}>{webPublicationDate}</span>
        </div>
        <div className={styles.wrapperInfoTitle}>
          <span className={styles.infoTitle}>{webTitle}</span>
        </div>
        <div>
          <Link href={apiUrl}>
            <div className={styles.wrapperDetails}>
              <span className={styles.detailsText}>
                <FormattedMessage id='article-card.details' />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
