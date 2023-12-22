export interface ArticleCardProps {
  id: string
  apiUrl: string
  webTitle: string
  webPublicationDate: string
  blocks: {
    main: {
      bodyHtml: string
    }
  }
}
