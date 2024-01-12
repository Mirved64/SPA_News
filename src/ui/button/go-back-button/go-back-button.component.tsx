'use client'

import { FC } from 'react'
import { ButtonProps } from '../button.interfaces'
import styles from './go-back-button.module.css'
import { deleteCookies } from '@utils/helpers'

export const GoBackButton: FC<ButtonProps> = ({ text }) => (
  <button className={styles.buttonGoBack} onClick={() => deleteCookies()}>
    <span className={styles.buttonTextGoBack}>{text}</span>
  </button>
)
