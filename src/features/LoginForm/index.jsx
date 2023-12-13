import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../../features/auth/authSlice'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function LoginForm() {
	const [userName, setUserName] = useState('')
	const [password, setPassword] = useState('')
	const dispatch = useDispatch()

	const submitForm = (e) => {
		e.preventDefault()
		console.log(userName, password)
		dispatch(userLogin({ userName, password }))
	}

	return (
		<div>
			<form onSubmit={submitForm}>
				{/* Username input */}
				<InputWrapper>
					<label htmlFor='username'>Username</label>
					<input
						type='text'
						id='username'
						onChange={(e) =>
							setUserName(e.target.value)
						}
						required
					/>
				</InputWrapper>

				{/* Password input */}
				<InputWrapper>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						onChange={(e) =>
							setPassword(e.target.value)
						}
						required
					/>
				</InputWrapper>

				{/* Remerber me input */}
				<InputRemember>
					<input type='checkbox' id='remember-me' />
					<label htmlFor='remember-me'>
						Remember me
					</label>
				</InputRemember>

				{/* Button submit */}
				<SubmitButton type='submit'>Sign In</SubmitButton>
			</form>
			<Link to={'/profil'}>profil</Link>
		</div>
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
