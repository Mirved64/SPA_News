export interface Data {
  response: {
    message: 'ok' | 'error'
    content: {
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
        body: [
          {
            bodyHtml: string
          },
        ]
      }
    }
  }
}
