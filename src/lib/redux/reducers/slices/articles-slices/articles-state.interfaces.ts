import { Article } from '@utils'

export interface ArticlesState {
  articles: Article[]
  isLoading: boolean
  error: string
}
