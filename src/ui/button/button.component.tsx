import { FC } from 'react'
import styles from './button.styles.module.css'
import { ButtonProps } from '@ui/button/button.interfaces'

export const ButtonPrimary: FC<ButtonProps> = ({ text }) => (
  <button className={styles.wrapperButton}>
    <span className={styles.buttonText}>{text}</span>
  </button>
)
