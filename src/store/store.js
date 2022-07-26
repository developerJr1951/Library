import { configureStore } from '@reduxjs/toolkit'
import { BookSlice } from './slices/librarys/Book'
import { userSlice } from './slices/user/User'

export const store = configureStore({
  reducer: {
    user:userSlice.reducer,
    book:BookSlice.reducer
  },
})