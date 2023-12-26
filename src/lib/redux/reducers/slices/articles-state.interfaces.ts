import { Article } from '@utils/interfaces'

export interface ArticlesState {
  articles: Article[]
  isLoading: boolean
  error: string
}
