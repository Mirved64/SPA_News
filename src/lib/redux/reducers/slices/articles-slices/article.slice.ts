import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticleState } from './article-state.interfaces'
import { fetchArticles } from '@lib/redux'

import { Article } from '@utils'

const initialState: ArticleState = {
  articles: [],
  isLoading: false,
  error: '',
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticles.fulfilled.type,
      (state: ArticleState, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = ''
        state.articles = action.payload
      },
    )
    builder.addCase(fetchArticles.pending.type, (state: ArticleState) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchArticles.rejected.type,
      (state: ArticleState, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    )
  },
})

export const articleReducer = articleSlice.reducer
