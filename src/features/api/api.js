/*
  API Slice Configuration

  This file configures an API slice using createApi and fetchBaseQuery from @reduxjs/toolkit/query/react.
  It defines an API with base query settings, endpoints for interacting with user profiles, and
  provides generated hooks for querying and mutating profile data.
  
  API Configuration:
  - baseUrl: Base URL for API requests (imported from authAction).
  - prepareHeaders: Function to include the authorization header with the user token in API requests.

  Endpoints:
  - getProfile: Query endpoint to fetch user profile data via a POST request to 'user/profile'.
  - updateProfile: Mutation endpoint to update user profile data via a PUT request to 'user/profile'.

  Hooks:
  - useGetProfileQuery: Generated hook for using the getProfile query.
  - useUpdateProfileMutation: Generated hook for using the updateProfile mutation.

*/
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { backendURL } from '../auth/authAction'

export const apiSlice = createApi({
	// Configure the base query with common settings
	baseQuery: fetchBaseQuery({
		baseUrl: backendURL,
		/// Prepare headers function to include the authorization header with the user token
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),

	// Define API endpoints using builder
	endpoints: (builder) => ({
		// Query endpoint to get user profile data
		getProfile: builder.query({
			query: () => ({
				url: 'user/profile',
				method: 'POST',
			}),
		}),

		// Mutation endpoint to update user profile data
		updateProfile: builder.mutation({
			query: ({ firstName, lastName }) => ({
				url: 'user/profile',
				method: 'PUT',
				body: { firstName, lastName },
			}),
		}),
	}),
})

export const { useGetProfileQuery, useUpdateProfileMutation } = apiSlice
export default apiSlice
