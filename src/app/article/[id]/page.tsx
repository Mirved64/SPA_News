import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { fetchArticleData } from './actions'
import styles from './page.module.css'
import { GoBackButton } from '@ui/button'
import { getArticleDate, getImgAlt, getImgSrc } from '@utils/helpers'

export const metadata: Metadata = {
  title: 'Article',
  description: 'Simple SPA News',
}
const Page = async () => {
  const { webPublicationDate, webTitle, webUrl, blocks } = await fetchArticleData()
  return (
    <main>
      <div className={styles.articleTitleContainer}>
        <div className={styles.articleTitleWrapper}>
          <h1 className={styles.articleTitle}>{webTitle}</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div>
          <span className={styles.articleDate}>{getArticleDate(webPublicationDate)}</span>
        </div>
        <div>
          <a href={webUrl} target='_blank'>
            Read on Guardian
          </a>
        </div>
      </div>
      <div className={styles.articleBodyContainer}>
        <div className={styles.articleImgContainer}>
          <Image
            src={getImgSrc(blocks?.main?.bodyHtml)}
            alt={getImgAlt(blocks?.main?.bodyHtml)}
            width={300}
            height={300}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(
              blocks?.body[0]?.bodyHtml,
            ),
          }}
          className={styles.articleBody}
        />
        <div>
          <Link href={'/'}>
            <GoBackButton text={'Go back'} />
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Page
