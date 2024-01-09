export interface ArticleCardProps {
  id: string
  webTitle: string
  webPublicationDate: string
  blocks: {
    main: {
      bodyHtml: string
    }
  }
}
