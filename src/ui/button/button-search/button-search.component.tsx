import { FC } from 'react'
import { ButtonProps } from '../button.interfaces'
import styles from './button-search.module.css'

export const ButtonSearch: FC<ButtonProps> = ({ text, onClick }) => (
  <button className={styles.buttonSearch} onClick={onClick}>
    <span className={styles.buttonTextSearch}>{text}</span>
  </button>
)
