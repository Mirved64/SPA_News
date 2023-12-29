'use client'
import { useState } from 'react'
import styles from './page.styles.module.css'
import { Content } from '@components/content'
import { PerPageSelector } from '@components/per-page-selector'
import { Search } from '@components/search'
import { Sort, SortListOptions } from '@components/sort'
import { usePageBottom } from '@utils/hooks'

const Home = () => {
  const [reachedBottom, setReachedBottom] = usePageBottom()
  const [keyWords, setKeyWords] = useState<string>('')
  const [sortValue, setSortValue] = useState<string>(SortListOptions.byNewest)
  const [perPageValue, setPerPageValue] = useState<string>('10')
  return (
    <main className={styles.wrapperMain}>
      <Search
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
        setKeyWords={setKeyWords}
        sortValue={sortValue}
        setSortValue={setSortValue}
        perPageValue={perPageValue}
      />
      <div className={styles.wrapperControlPanel}>
        <Sort
          sortValue={sortValue}
          setSortValue={setSortValue}
          keyWords={keyWords}
          valueFirst={SortListOptions.byNewest}
          valueSecond={SortListOptions.byRelevance}
          id={'sorted-by'}
          perPageValue={perPageValue}
        />
        <PerPageSelector
          id={'articles-per-page'}
          perPageValue={perPageValue}
          setPerPageValue={setPerPageValue}
          keyWords={keyWords}
          sortValue={sortValue}
        />
      </div>
      <Content
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
        perPageValue={perPageValue}
      />
    </main>
  )
}
export default Home
