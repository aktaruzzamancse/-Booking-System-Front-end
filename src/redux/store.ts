import { configureStore } from '@reduxjs/toolkit'
import serviceReducer from './features/serviceSlice'
import { baseApi} from './api/api'
import logger from 'redux-logger'

export const store = configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      services:serviceReducer,
      
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  })
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch