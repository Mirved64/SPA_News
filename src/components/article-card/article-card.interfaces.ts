export interface ArticleCardProps {
  id: string
  webTitle: string
  apiUrl: string
  webPublicationDate: string
  blocks: {
    main: {
      id: string
      bodyHtml: string
    }
  }
}
