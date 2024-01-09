import { ChangeEventHandler } from 'react'

export interface SelectArticlesPerPageProps {
  id: string
  onChange: ChangeEventHandler<HTMLSelectElement>
  perPageValue: number
}
