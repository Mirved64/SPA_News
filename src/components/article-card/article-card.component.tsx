import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { FormattedMessage } from 'react-intl'
import { ArticleCardProps } from './article-card.interfaces'
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
    <div className='wrapper' id={id}>
      <div className='wrapper-image'>
        <Image
          src={imgSrc ?? '/the-guardian-logo.png'}
          alt={imgAlt ?? 'theGuardianPic'}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className='wrapper-info'>
        <div>
          <span className='info-date'>{webPublicationDate}</span>
        </div>
        <div className='info-title'>
          <span className='info-title__text'>{webTitle}</span>
        </div>
        <div>
          <Link href={apiUrl} className='info-details'>
            <div>
              <span className='info-details__link'>
                <FormattedMessage id='article-card.details' />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
