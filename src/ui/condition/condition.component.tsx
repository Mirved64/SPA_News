import { FC } from 'react'
import { ConditionProps } from '@ui/condition/condition.interfaces'

export const Condition: FC<ConditionProps> = ({ match, children }) => {
  if (!match) return null

  // eslint-disable-next-line
  return <>{children}</>
}
