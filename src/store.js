import { configureStore } from '@reduxjs/toolkit'
import { ApiSlice } from './features/api/ApiSlice'

export default configureStore({
  reducer: {
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(ApiSlice.middleware),
})
