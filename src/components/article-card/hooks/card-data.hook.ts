import { getImgAlt, getImgSrc } from '@components/article-card/helpers'
import { getArticleDate } from '@components/article-card/helpers/get-date'

export const useCardData = (
  articleData: string | undefined,
  createdDate: string,
): { imgSrc: string; imgAlt: string; articleDate: string } => {
  const imgSrc: string = getImgSrc(articleData)
  const imgAlt: string = getImgAlt(articleData)
  const articleDate: string = getArticleDate(createdDate)
  return {
    imgSrc,
    imgAlt,
    articleDate,
  }
}
