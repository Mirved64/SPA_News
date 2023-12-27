import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticlesState } from './articles-state.interfaces'
import {
  fetchArticles,
  fetchArticlesByKeywords,
  fetchNextArticles,
} from '@lib/redux/reducers/actions'
import { Article } from '@utils/interfaces'

const initialState: ArticlesState = {
  articles: [],
  isLoading: false,
  error: '',
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticles.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = ''
        state.articles = action.payload
      },
    )
    builder.addCase(fetchArticles.pending.type, (state: ArticlesState) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchArticles.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    )
    builder.addCase(
      fetchNextArticles.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = ''
        state.articles = state.articles.concat(action.payload)
      },
    )
    builder.addCase(fetchNextArticles.pending.type, (state: ArticlesState) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchNextArticles.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    )
    builder.addCase(
      fetchArticlesByKeywords.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        state.error = ''
        state.articles = action.payload
      },
    )
    builder.addCase(fetchArticlesByKeywords.pending.type, (state: ArticlesState) => {
      state.isLoading = true
    })
    builder.addCase(
      fetchArticlesByKeywords.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.isLoading = false
        state.error = action.payload
      },
    )
  },
})

export const articlesReducer = articlesSlice.reducer
