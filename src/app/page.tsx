'use client'
import styles from './page.styles.module.css'
import { Content } from '@components/content'
import { PerPageSelector } from '@components/per-page-selector'
import { Search } from '@components/search'
import { Sort } from '@components/sort'
import { usePageBottom } from '@utils/hooks'

const Home = () => {
  const [reachedBottom, setReachedBottom] = usePageBottom()
  return (
    <main className={styles.wrapperMain}>
      <Search reachedBottom={reachedBottom} setReachedBottom={setReachedBottom} />
      <div className={styles.wrapperControlPanel}>
        <Sort id={'sorted-by'} />
        <PerPageSelector id={'articles-per-page'} />
      </div>
      <Content reachedBottom={reachedBottom} setReachedBottom={setReachedBottom} />
    </main>
  )
}
export default Home
