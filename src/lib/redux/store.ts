import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleReducer } from '@lib/redux/reducers'

export const rootReducer = combineReducers({
  articleReducer,
})

export const setupStore = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof setupStore.getState>
export type AppDispatch = typeof setupStore.dispatch
