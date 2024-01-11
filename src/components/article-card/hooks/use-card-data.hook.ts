import { createCookie, getArticleDate, getImgAlt, getImgSrc } from '@utils/helpers'

export const useCardData = (
  articleData: string | undefined,
  createdDate: string,
): {
  imgSrc: string
  imgAlt: string
  articleDate: string
  createCookie: (apiUrl: string) => void
} => {
  const imgSrc: string = getImgSrc(articleData)
  const imgAlt: string = getImgAlt(articleData)
  const articleDate: string = getArticleDate(createdDate)
  return {
    imgSrc,
    imgAlt,
    articleDate,
    createCookie,
  }
}
