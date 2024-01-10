import DOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import Image from 'next/image'
import { fetchArticleData } from './actions'
import { getArticleDate, getImgAlt, getImgSrc } from '@utils/helpers'

const Page = async () => {
  const { webPublicationDate, webTitle, webUrl, blocks } = await fetchArticleData()
  return (
    <main>
      <div>
        <h1>{webTitle}</h1>
      </div>
      <div>
        <div>
          <span>{getArticleDate(webPublicationDate)}</span>
        </div>
        <div>
          <a href={webUrl}>Read on Guardian</a>
        </div>
      </div>
      <div>
        <div>
          <Image
            src={getImgSrc(blocks?.main?.bodyHtml)}
            alt={getImgAlt(blocks?.main?.bodyHtml)}
            width={300}
            height={300}
          />
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify(new JSDOM('<!DOCTYPE html>').window).sanitize(
              blocks?.body[0]?.bodyHtml,
            ),
          }}
        />
      </div>
    </main>
  )
}

export default Page
