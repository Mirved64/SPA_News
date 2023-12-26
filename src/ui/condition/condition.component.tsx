import { FC } from 'react'
import { ConditionProps } from './condition.interfaces'

export const Condition: FC<ConditionProps> = ({ match, children }) => {
  if (!match) return null

  // eslint-disable-next-line
  return <>{children}</>
}
