import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ArticlesState } from './articles-state.interfaces'
import { RootState } from '@lib/redux'
import {
  fetchArticles,
  fetchArticlesByKeywords,
  fetchNextArticles,
  fetchNextArticlesByKeywords,
} from '@lib/redux/reducers/actions'
import { Article } from '@utils/interfaces'

const initialState: ArticlesState = {
  articles: [],
  status: 'idle',
  error: null,
}

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchArticles.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded'
        state.error = null
        state.articles = action.payload
      },
    )
    builder.addCase(fetchArticles.pending.type, (state: ArticlesState) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchArticles.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.status = 'failed'
        state.error = action.payload
      },
    )
    builder.addCase(
      fetchNextArticles.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded'
        state.error = null
        state.articles = state.articles.concat(action.payload)
      },
    )
    builder.addCase(fetchNextArticles.pending.type, (state: ArticlesState) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchNextArticles.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.status = 'failed'
        state.error = action.payload
      },
    )
    builder.addCase(
      fetchArticlesByKeywords.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded'
        state.error = null
        state.articles = action.payload
      },
    )
    builder.addCase(fetchArticlesByKeywords.pending.type, (state: ArticlesState) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchArticlesByKeywords.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.status = 'failed'
        state.error = action.payload
      },
    )
    builder.addCase(
      fetchNextArticlesByKeywords.fulfilled.type,
      (state: ArticlesState, action: PayloadAction<Article[]>) => {
        state.status = 'succeeded'
        state.error = ''
        state.articles = state.articles.concat(action.payload)
      },
    )
    builder.addCase(fetchNextArticlesByKeywords.pending.type, (state: ArticlesState) => {
      state.status = 'loading'
    })
    builder.addCase(
      fetchNextArticlesByKeywords.rejected.type,
      (state: ArticlesState, action: PayloadAction<string>) => {
        state.status = 'failed'
        state.error = action.payload
      },
    )
  },
})

export const articlesState = (state: RootState) => state.articles
export const articlesReducer = articlesSlice.reducer
