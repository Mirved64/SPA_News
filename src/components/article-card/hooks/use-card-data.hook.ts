import { getArticleDate, getImgAlt, getImgSrc } from '@utils/helpers'

export const useCardData = (
  articleData: string | undefined,
  createdDate: string,
): { imgSrc: string; imgAlt: string; articleDate: string; setCookie: (apiUrl: string) => void } => {
  const imgSrc: string = getImgSrc(articleData)
  const imgAlt: string = getImgAlt(articleData)
  const articleDate: string = getArticleDate(createdDate)
  const setCookie = (apiUrl: string): void => {
    document.cookie = `apiUrl=${apiUrl}`
  }
  return {
    imgSrc,
    imgAlt,
    articleDate,
    setCookie,
  }
}
