/**
 * The EditName component represents a form for editing the user's first and last name.
 * It utilizes react-hook-form for form handling, styled-components for styling, and includes Save and Cancel buttons.
 * The form allows users to update their first and last names and triggers the onSave or onCancel callbacks accordingly.
 *
 * @component
 * @param {string} firstName - The current first name of the user.
 * @param {string} lastName - The current last name of the user.
 * @param {Function} onSave - Callback function triggered when the user clicks the "Save" button.
 * @param {Function} onCancel - Callback function triggered when the user clicks the "Cancel" button.
 * @returns {JSX.Element} EditName component.
 */

import { useForm } from 'react-hook-form'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import { colors } from '../../utils/style/colors'
import { Header } from '../../pages/User'
import { ErrorMessage } from '../LoginForm'

export default function EditName({ firstName, lastName, onSave, onCancel }) {
	// React-hook-form configuration
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	// Form submission function
	const submitForm = (data) => {
		// Format the data by checking if the input fields are empty;
		//if empty, keep the current names, and then trigger the onSave callback.
		const formattedData = {
			firstName: data.firstName || firstName,
			lastName: data.lastName || lastName,
		}
		onSave(formattedData)
	}

	// JSX structure defining the Footer component layout
	return (
		<Header>
			<h1>Welcome back</h1>

			{/* EditName form */}
			<form onSubmit={handleSubmit(submitForm)}>
				<Wrapper>
					{/* Input fields for first and last names */}
					<WrapperInput>
						<StyledInput
							type='text'
							{...register('firstName', {
								pattern: {
									value: /^[a-zA-ZÀ-ÿ-]+$/,
									message: 'Invalid format',
								},
							})}
							placeholder={firstName}
						/>
						{errors.firstName && (
							<ErrorMessage>
								{
									errors.firstName
										.message
								}
							</ErrorMessage>
						)}
					</WrapperInput>

					<WrapperInput>
						<StyledInput
							type='text'
							{...register('lastName', {
								pattern: {
									value: /^[a-zA-ZÀ-ÿ-]+$/,
									message: 'Invalid format',
								},
							})}
							placeholder={lastName}
						/>

						{errors.lastName && (
							<ErrorMessage>
								{
									errors.lastName
										.message
								}
							</ErrorMessage>
						)}
					</WrapperInput>
				</Wrapper>

				<Wrapper>
					{/* Buttons for Save and Cancel actions */}
					<Button type='submit'>Save</Button>

					<Button
						type='button'
						onClick={(event) => {
							event.preventDefault()
							onCancel()
						}}
					>
						Cancel
					</Button>
				</Wrapper>
			</form>
		</Header>
	)
}

// Styled components
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	margin-bottom: 2rem;
	gap: 1.2rem;

	@media (${device.laptop}) {
		flex-direction: row;
		margin-bottom: 1rem;
		gap: 1.5rem;
	}
`

const WrapperInput = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 0.5rem;
`

const StyledInput = styled.input`
	padding: 8px;
	font-size: 1.2rem;
	border: 3px solid ${colors.grey};
	width: 85%;

	@media (${device.laptop}) {
		width: initial;
	}

	::placeholder {
		color: ${colors.grey};
	}
`

const Button = styled.button`
	border: 3px solid ${colors.primary};
	background-color: ${colors.white};
	color: ${colors.primary};
	padding: 10px;
	font-size: 1.1rem;
	font-weight: bold;
	width: 90%;

	@media (${device.laptop}) {
		flex-direction: row;
		align-items: normal;
		width: 9rem;
	}
`
