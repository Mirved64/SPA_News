'use client'

import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import styles from './header.module.css'

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapperLogo}>
      <Image
        src={'/logo.png'}
        alt={'logo'}
        width={100}
        height={100}
        priority
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <div className={styles.wrapperHeaderTitle}>
      <span className={styles.title}>
        <FormattedMessage id={'header.title'} />
      </span>
    </div>
  </header>
)
