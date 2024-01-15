import { FC } from 'react'
import { usePerPageSelectorData } from './hooks'
import { PerPageSelectorProps } from './per-page-selector.interfaces'
import styles from './per-page-selector.module.css'
import { SelectArticlesPerPage } from '@ui/select'

export const PerPageSelector: FC<PerPageSelectorProps> = ({ id }) => {
  const { handleChange, perPageValue } = usePerPageSelectorData()
  return (
    <div className={styles.wrapperPerPageSelector}>
      <SelectArticlesPerPage id={id} onChange={handleChange} perPageValue={perPageValue} />
    </div>
  )
}
