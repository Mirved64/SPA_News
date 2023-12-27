import { getArticleDate, getImgAlt, getImgSrc } from '../helpers'

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
