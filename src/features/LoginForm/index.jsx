import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userLogin } from '../auth/authAction'

import styled from 'styled-components'

export default function LoginForm() {
	const { loading, error, success } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { register, handleSubmit } = useForm()

	// redirect authenticated user to user page
	useEffect(() => {
		if (success) {
			navigate('/profile')
		}
	}, [navigate, success])

	const submitForm = (data) => {
		dispatch(userLogin(data))
	}

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			{/* Username input */}
			<InputWrapper>
				<label htmlFor='username'>Username</label>
				<input
					type='text'
					id='username'
					{...register('email')}
					required
				/>
			</InputWrapper>

			{/* Password input */}
			<InputWrapper>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					{...register('password')}
					required
				/>
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
	border-color: #00bc77;
	background-color: #00bc77;
	color: #fff;
`
