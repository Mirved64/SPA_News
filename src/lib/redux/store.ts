import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articlesReducer } from '@lib/redux/reducers/slices'

export const rootReducer = combineReducers({
  articles: articlesReducer,
})

export const setupStore = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
