/**
 * The LoginForm component represents a form for user login.
 * It utilizes react-hook-form for form handling, React Redux for state management, and styled-components for styling.
 * The form includes fields for username, password, and a "Remember me" checkbox.
 * The user is redirected to the user profile page upon successful login.
 *
 * @component
 * @returns {JSX.Element} LoginForm component.
 */

import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../auth/authAction'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function LoginForm() {
	// Selecting authentication state and user profile information from the Redux store
	const { loading, error, success } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	// React-hook-form configuration
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	// Redirect authenticated user to the UserPage
	useEffect(() => {
		if (success) {
			navigate('/profile')
		}
	}, [navigate, success])

	// Form submission function
	const submitForm = (data) => {
		dispatch(userLogin(data))
	}

	// JSX structure defining the Footer component layout
	return (
		<form onSubmit={handleSubmit(submitForm)} noValidate>
			{/* Display API error message if present */}
			{error && <ErrorAPIMessage>{error}</ErrorAPIMessage>}

			{/* Username input */}
			<InputWrapper>
				<label htmlFor='username'>Username</label>
				<input
					type='email'
					id='username'
					{...register('email', {
						required: 'Please enter your email address',
						pattern: {
							value: /\b[\w.-]+@[\w.-]+\.\w{2,}\b/i,
							message: 'Invalid email address',
						},
					})}
					required
				/>
				{errors.email && (
					<ErrorMessage>
						{errors.email.message}
					</ErrorMessage>
				)}
			</InputWrapper>

			{/* Password input */}
			<InputWrapper>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					{...register('password', {
						required: 'Please enter your password',
					})}
				/>
				{errors.password && (
					<ErrorMessage>
						{errors.password.message}
					</ErrorMessage>
				)}
			</InputWrapper>

			{/* Remerber me input */}
			<InputRemember>
				<input
					type='checkbox'
					id='remember-me'
					{...register('rememberMe')}
				/>
				<label htmlFor='remember-me'>Remember me</label>
			</InputRemember>

			{/* Button submit */}
			<SubmitButton type='submit' disabled={loading}>
				Sign In
			</SubmitButton>
		</form>
	)
}

// Styled components
const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-bottom: 1rem;

	label {
		font-weight: bold;
	}

	input {
		padding: 5px;
		font-size: 1.2rem;
	}
`

const InputRemember = styled.div`
	display: flex;

	label {
		margin-left: 0.25rem;
	}
`

const SubmitButton = styled.button`
	display: block;
	width: 100%;
	padding: 8px;
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 1rem;
	border-color: ${colors.primary};
	background-color: ${colors.primary};
	color: ${colors.white};
`

const ErrorAPIMessage = styled.p`
	color: ${colors.error};
	font-size: 0.8rem;
	font-weight: bold;
	padding: 0.2rem;
	margin-bottom: 0 0 0.5rem 0;
	background-color: rgba(${colors.bgError}, 0.3);
`

export const ErrorMessage = styled.p`
	color: ${colors.error};
	font-size: 0.8rem;
	margin: 0.2rem 0 0 0;
`
