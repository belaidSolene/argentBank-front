/*
  Redux Store Configuration

  This file configures the Redux store using the configureStore function from
  the @reduxjs/toolkit library. It combines reducers from different slices of the
  application state, such as the authentication slice (authSlice) and the API slice (apiSlice).
  Middleware for handling asynchronous API calls is also integrated.

  - configureStore: Creates the Redux store with specified reducers and middleware.
  - authReducer: Manages state related to user authentication, enabling identification of the user.
  - apiSlice: Provides functionality for making asynchronous API calls and handles associated state.
    It generates queries after the user is identified thanks to authSlice.

  The configured store is exported for use throughout the application.

  Directory Structure:
  - ../features/auth/authSlice: Authentication slice and related reducer.
  - ../features/api/api: API slice with reducer and middleware.
*/

import { configureStore } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'
import { apiSlice } from '../features/api/api'

const store = configureStore({
	reducer: {
		auth: authReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
})

export default store
