import { useForm } from 'react-hook-form'

export default function EditName({ firstName, lastName, onSave, onCancel }) {
	const { register, handleSubmit } = useForm()

	const submitForm = (data) => onSave(data)

	return (
		<div className='header'>
			<h1>Welcome back</h1>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className='container-input'>
					<input
						className='edit-firstname'
						type='text'
						{...register('firstName')}
						placeholder={firstName}
					/>
					<input
						className='edit-lastname'
						type='text'
						{...register('lastName')}
						placeholder={lastName}
					/>
				</div>

				<div className='container-button'>
					<button type='submit' className='button'>
						Save
					</button>

					<button
						className='button'
						onClick={onCancel}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	)
}
