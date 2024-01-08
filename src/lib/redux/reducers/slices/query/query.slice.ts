import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { QueryState } from './query-state.interfaces'
import { RootState } from '@lib/redux'

const initialState: QueryState = {
  keyWords: null,
  pageNumber: 2,
  sortValue: 'newest',
  perPageValue: 10,
}

export const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setKeyWords(state: QueryState, actions: PayloadAction<string>) {
      state.keyWords = actions.payload
    },
    setPageNumber(state: QueryState) {
      state.pageNumber += 1
    },
    resetPageNumber(state: QueryState) {
      state.pageNumber = 1
    },
    setSortValue(state: QueryState, actions: PayloadAction<string>) {
      state.sortValue = actions.payload
    },
    setPerPageValue(state: QueryState, actions: PayloadAction<number>) {
      state.perPageValue = actions.payload
    },
  },
})

export const { setKeyWords, setPageNumber, setPerPageValue, setSortValue, resetPageNumber } =
  querySlice.actions
export const querySate = (state: RootState) => state.query
export const queryReducer = querySlice.reducer
