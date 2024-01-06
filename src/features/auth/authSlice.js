import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from './authAction'

const initialState = {
	userProfile: {}, // for user object
	userToken: null, // for storing the JWT
	loading: false,
	success: false, // for monitoring the registration process.
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setProfile: (state, action) => {
			state.userProfile = action.payload
		},
		logout: (state) => {
			state.loading = initialState.loading
			state.userProfile = initialState.userProfile
			state.userToken = initialState.userToken
			state.error = initialState.error
			state.success = initialState.success
		},
	},
	extraReducers: (builder) => {
		builder.addCase(userLogin.pending, (state) => {
			state.loading = true
			state.error = null
		})
		builder.addCase(userLogin.fulfilled, (state, { payload }) => {
			state.loading = false
			state.success = true
			state.userToken = payload.body.token
		})
		builder.addCase(userLogin.rejected, (state, { payload }) => {
			state.loading = false
			state.error = payload
		})
	},
})

export const { setProfile, logout } = authSlice.actions
export default authSlice.reducer
