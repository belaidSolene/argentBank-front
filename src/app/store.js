import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/api'

const store = configureStore({
	reducer: {
		user: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
