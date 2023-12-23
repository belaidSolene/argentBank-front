import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/api/v1',
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken
			if (token) {
				headers.set('authorization', `Bearer ${token}`)
			}
			return headers
		},
	}),
	endpoints: (builder) => ({
		getProfile: builder.query({
			query: () => ({
				url: 'user/profile',
				method: 'POST',
			}),
		}),

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
