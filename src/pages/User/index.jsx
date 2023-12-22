import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../features/auth/authSlice'

import {
	useUserProfileQuery,
	useUpdateProfileMutation,
} from '../../features/api/api'
import { accountUser } from '../../data/accountUser'

import Navigation from '../../components/Navigation'
import EditName from '../../features/EditName'
import Footer from '../../components/Footer'
import AccountCard from '../../components/AccountCard'

export default function User() {
	const { success, userProfile } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data: userProfileData } = useUserProfileQuery()

	const [isEditing, setIsEditing] = useState(false)
	const [updateProfile] = useUpdateProfileMutation()

	const toggleEditing = () => {
		setIsEditing(!isEditing)
	}

	const saveEditedName = async (editedData) => {
		try {
			const { data: updatedProfileData } = await updateProfile({
				firstName: editedData.firstName,
				lastName: editedData.lastName,
			})

			// Dispatch action to update the user profile with the updated data
			dispatch(setProfile(updatedProfileData.body))

			// Close the editing form
			setIsEditing(false)
		} catch (error) {
			console.error('Error updating profile:', error)
		}
	}

	useEffect(() => {
		if (success && userProfileData) {
			dispatch(setProfile(userProfileData.body))
		} else {
			navigate('/login')
		}
	}, [dispatch, navigate, success, userProfileData])

	const { firstName, lastName } = userProfile

	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation firstName={firstName} />

			{/* Main Part of User Page */}
			<main className='main bg-dark'>
				{/* Header Main Part */}
				{isEditing ? (
					<EditName
						firstName={firstName}
						lastName={lastName}
						onSave={saveEditedName}
						onCancel={toggleEditing}
					/>
				) : (
					<div className='header'>
						<h1>
							Welcome back
							<br />
							{firstName} {lastName}!
						</h1>
						<button
							className='edit-button'
							onClick={toggleEditing}
						>
							Edit Name
						</button>
					</div>
				)}

				{/* Accounts Part */}
				<h2 className='sr-only'>Accounts</h2>

				{accountUser.map(
					({ title, amount, description }, index) => (
						<AccountCard
							title={title}
							amount={amount}
							description={description}
							key={index}
						/>
					)
				)}
			</main>

			<Footer />
		</div>
	)
}
