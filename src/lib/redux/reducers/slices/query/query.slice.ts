import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QueryState } from './query-state.interfaces'
import { SortListOptions } from '@components/sort'

const initialState: QueryState = {
  articleId: '',
  keyWords: '',
  pageNumber: 2,
  sortValue: SortListOptions.byNewest,
  perPageValue: 10,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setArticleId(state: QueryState, actions: PayloadAction<string>) {
      state.articleId = actions.payload
    },
    setKeyWords(state: QueryState, actions: PayloadAction<string>) {
      state.keyWords = actions.payload
    },
    setPageNumber(state: QueryState) {
      state.pageNumber++
    },
    resetPageNumber(state: QueryState) {
      state.pageNumber = 2
    },
    setSortValue(state: QueryState, actions: PayloadAction<string>) {
      state.sortValue = actions.payload
    },
    setPerPageValue(state: QueryState, actions: PayloadAction<number>) {
      state.perPageValue = actions.payload
    },
  },
})

export const {
  setArticleId,
  setKeyWords,
  setPageNumber,
  resetPageNumber,
  setSortValue,
  setPerPageValue,
} = querySlice.actions
export const queryReducer = querySlice.reducer
