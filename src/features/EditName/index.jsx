import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Header } from '../../pages/User'

export default function EditName({ firstName, lastName, onSave, onCancel }) {
	const { register, handleSubmit } = useForm()

	const submitForm = (data) => onSave(data)

	return (
		<Header>
			<h1>Welcome back</h1>

			<form onSubmit={handleSubmit(submitForm)}>
				<Wrapper>
					<StyledInput
						className='edit-firstname'
						type='text'
						{...register('firstName')}
						placeholder={firstName}
					/>
					<StyledInput
						className='edit-lastname'
						type='text'
						{...register('lastName')}
						placeholder={lastName}
					/>
				</Wrapper>

				<Wrapper>
					<Button type='submit' className='button'>
						Save
					</Button>

					<Button
						className='button'
						onClick={onCancel}
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
	justify-content: center;
	margin-bottom: 1rem;
	gap: 1.5rem;
`

const StyledInput = styled.input`
	padding: 8px;
	font-size: 1.2rem;
	border: 3px solid ${colors.grey};
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
	margin-top: 1rem;
	width: 9rem;
`
