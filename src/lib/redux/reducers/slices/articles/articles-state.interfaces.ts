import { Article } from '@utils/interfaces'

type Status = 'idle' | 'loading' | 'succeeded' | 'failed'
export interface ArticlesState {
  articles: Article[]
  status: Status
  error: string | null
}
