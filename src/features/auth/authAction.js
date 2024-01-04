/*
  User Login Async Thunk

  This file defines an asynchronous thunk for handling user login using createAsyncThunk
  from @reduxjs/toolkit. It uses Axios for making HTTP requests.

  - createAsyncThunk: Function for creating asynchronous thunks with automatic promise lifecycle actions.

  Constants:
  - backendURL: Base URL for backend API requests. Will be used in the API slice.

  Async Thunk:
  - userLogin: Asynchronous thunk for user login.
    - Parameters:
      - { email, password }: User credentials for login.
      - { rejectWithValue }: Function for returning custom errors to the Redux store.

    - Functionality:
      - Configure headers with 'Content-Type' as JSON.
      - Make a POST request to the backend for user login.
      - Return the received data.

      - Error Handling:
        - Return a custom error message from the API if any.
        - If no specific error message is provided, return the generic error message.
		
*/

import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// Define the base URL for backend API requests
export const backendURL = 'http://localhost:3001/api/v1/'

// Create an asynchronous thunk for user login
export const userLogin = createAsyncThunk(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			// Configure headers with 'Content-Type' as JSON
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			}

			// Make a POST request to the backend for user login
			const { data } = await axios.post(
				`${backendURL}user/login`,
				{ email, password },
				config
			)

			return data
		} catch (error) {
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message)
			} else {
				return rejectWithValue(error.message)
			}
		}
	}
)
