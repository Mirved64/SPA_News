import { FC } from 'react'
import { InputProps } from './input.interfaces'
import styles from './input.styles.module.css'

export const SearchInput: FC<InputProps> = ({ onChange, placeholder }) => (
  <input
    className={styles.inputSearch}
    onChange={onChange}
    placeholder={placeholder}
    type={'text'}
  />
)
