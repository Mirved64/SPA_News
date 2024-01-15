'use client'
import styles from './page.module.css'
import { Content } from '@components/content'
import { PerPageSelector } from '@components/per-page-selector'
import { Search } from '@components/search'
import { Sort } from '@components/sort'

const Home = () => (
  <main className={styles.wrapperMain}>
    <Search />
    <div className={styles.wrapperControlPanel}>
      <Sort id={'sorted-by'} />
      <PerPageSelector id={'articles-per-page'} />
    </div>
    <Content />
  </main>
)
export default Home
