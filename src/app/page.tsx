'use client'
import { useState } from 'react'
import styles from './page.styles.module.css'
import { Content } from '@components/content'
import { Search } from '@components/search'
import { usePageBottom } from '@utils/hooks'

const Home = () => {
  const [reachedBottom, setReachedBottom] = usePageBottom()
  const [keyWords, setKeyWords] = useState<string>('')
  return (
    <main className={styles.wrapperMain}>
      <Search
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
        setKeyWords={setKeyWords}
      />
      <Content
        reachedBottom={reachedBottom}
        setReachedBottom={setReachedBottom}
        keyWords={keyWords}
      />
    </main>
  )
}
export default Home
