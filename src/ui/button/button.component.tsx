import { FC } from 'react'
import { ButtonProps } from './button.interfaces'
import styles from './button.styles.module.css'

export const ButtonPrimary: FC<ButtonProps> = ({ text }) => (
  <button className={styles.buttonPrimary}>
    <span className={styles.buttonTextPrimary}>{text}</span>
  </button>
)

export const ButtonSearch: FC<ButtonProps> = ({ text, onClick }) => (
  <button className={styles.buttonSearch} onClick={onClick}>
    <span className={styles.buttonTextSearch}>{text}</span>
  </button>
)
