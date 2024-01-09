import { Article } from '@utils/interfaces'

export interface DataResponse {
  response: {
    status: 'ok' | 'error'
    message: string
    userTier: string
    total: number
    startIndex: number
    pageSize: number
    currentPage: number
    pages: number
    orderBy: string
    results: Article[]
  }
}
