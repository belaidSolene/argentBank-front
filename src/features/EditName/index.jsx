import { useForm } from 'react-hook-form'

import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import { colors } from '../../utils/style/colors'
import { Header } from '../../pages/User'

export default function EditName({ firstName, lastName, onSave, onCancel }) {
	const { register, handleSubmit } = useForm()

	const submitForm = (data) => {
		const formattedData = {
			firstName: data.firstName || firstName,
			lastName: data.lastName || lastName,
		}
		onSave(formattedData)
	}

	return (
		<Header>
			<h1>Welcome back</h1>

			<form onSubmit={handleSubmit(submitForm)}>
				<Wrapper>
					<StyledInput
						type='text'
						{...register('firstName')}
						placeholder={firstName}
					/>
					<StyledInput
						type='text'
						{...register('lastName')}
						placeholder={lastName}
					/>
				</Wrapper>

				<Wrapper>
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

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 2rem;
	gap: 1.2rem;

	@media (${device.laptop}) {
		flex-direction: row;
		align-items: normal;
		margin-bottom: 1rem;
		gap: 1.5rem;
	}
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
