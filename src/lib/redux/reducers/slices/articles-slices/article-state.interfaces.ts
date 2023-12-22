import { Article } from '@utils'

export interface ArticleState {
  articles: Article[]
  isLoading: boolean
  error: string
}
