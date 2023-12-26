import { FC } from 'react'
import { ButtonProps } from './button.interfaces'
import styles from './button.styles.module.css'

export const ButtonPrimary: FC<ButtonProps> = ({ text }) => (
  <button className={styles.wrapperButton}>
    <span className={styles.buttonText}>{text}</span>
  </button>
)
