export interface Article {
  id: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  blocks: {
    main: {
      id: string
      bodyHtml: string
    }
    body: {
      bodyHtml: string
    }
  }
}
