'use client'
import { useState } from 'react'
import styles from './page.styles.module.css'
import { Content } from '@components/content'
import { Search } from '@components/search'
import { Sort, SortListOptions } from '@components/sort'
import { usePageBottom } from '@utils/hooks'

const Home = () => {
  const [reachedBottom, setReachedBottom] = usePageBottom()
  const [keyWords, setKeyWords] = useState<string>('')
  const [sortValue, setSortValue] = useState<string>(SortListOptions.byNewest)

  return (
    <main className={styles.wrapperMain}>
      <Search
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
        setKeyWords={setKeyWords}
        sortValue={sortValue}
        setSortValue={setSortValue}
      />
      <div className={styles.wrapperSort}>
        <Sort
          sortValue={sortValue}
          setSortValue={setSortValue}
          keyWords={keyWords}
          valueFirst={SortListOptions.byNewest}
          valueSecond={SortListOptions.byRelevance}
          id={'sorted-by'}
        />
      </div>
      <Content
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
        sortValue={sortValue}
      />
    </main>
  )
}
export default Home
