export interface Article {
  id: string
  type: string
  sectionId: string
  sectionName: string
  webPublicationDate: string
  webTitle: string
  webUrl: string
  apiUrl: string
  isHosted: boolean
  pillarId: string
  pillarName: string
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
