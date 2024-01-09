import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articlesReducer } from './reducers/slices/articles'
import { queryReducer } from './reducers/slices/query'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  query: queryReducer,
})

export const setupStore = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
