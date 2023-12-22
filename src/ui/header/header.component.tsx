'use client'

import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import styles from './header.styles.module.css'

export const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.wrapperLogo}>
      <Image src={'/logo.png'} alt={'logo'} width={350} height={'100'} priority />
    </div>
    <div className={styles.wrapperTitle}>
      <span className={styles.title}>
        <FormattedMessage id={'header.title'} />
      </span>
    </div>
  </header>
)
