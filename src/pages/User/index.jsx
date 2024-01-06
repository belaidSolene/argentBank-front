/**
 * The 'User' component represents the user profile page.
 * It includes a navigation bar, the main content section, and a footer.
 * The main content section displays the user's profile information, such as name and accounts.
 * Users can also edit their name by clicking the 'Edit Name' button.
 *
 * @component
 */

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../features/auth/authSlice'
import {
	useGetProfileQuery,
	useUpdateProfileMutation,
} from '../../features/api/api'

import { accountUser } from '../../data/accountUser'

import Navigation from '../../components/Navigation'
import EditName from '../../features/EditName'
import Footer from '../../components/Footer'
import AccountCard from '../../components/AccountCard'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Container } from '../Index'

export default function User() {
	// State and hooks setup
	const { success, userProfile } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data: userProfileData } = useGetProfileQuery()
	const [isEditing, setIsEditing] = useState(false)
	const [updateProfile] = useUpdateProfileMutation()

	// Function to toggle the editing state
	const toggleEditing = () => {
		setIsEditing(!isEditing)
	}

	// Function to save the edited name
	const saveEditedName = async (editedData) => {
		try {
			// Update the user profile using the API
			const { data: updatedProfileData } = await updateProfile({
				firstName: editedData.firstName,
				lastName: editedData.lastName,
			})

			console.log(updatedProfileData.body)

			// Dispatch action to update the user profile with the updated data
			dispatch(setProfile(updatedProfileData.body))

			// Close the editing form
			setIsEditing(false)
		} catch (error) {
			console.error('Error updating profile:', error)
		}
	}

	// Redirect user to the Login page if they are not authenticated
	useEffect(() => {
		if (success && userProfileData) {
			// Dispatch action to update the user profile with the received data
			dispatch(setProfile(userProfileData.body))
		} else {
			navigate('/login')
		}
	}, [dispatch, navigate, success, userProfileData])

	const { firstName, lastName } = userProfile

	// JSX structure defining the Footer component layout
	return (
		<Container>
			<Navigation />

			{/* Main Content Section */}
			<StyledMain>
				{isEditing ? (
					// Display the editing form if in editing mode
					<EditName
						firstName={firstName}
						lastName={lastName}
						onSave={saveEditedName}
						onCancel={toggleEditing}
					/>
				) : (
					// Display the user profile information if not in editing mode
					<Header>
						<h1>
							Welcome back
							<br />
							{firstName} {lastName}!
						</h1>
						<EditButton onClick={toggleEditing}>
							Edit Name
						</EditButton>
					</Header>
				)}

				{/* Accounts Part */}
				<h2 className='sr-only'>Accounts</h2>

				{/* Map through and display user accounts */}
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
			</StyledMain>

			<Footer />
		</Container>
	)
}

// Styled components
const StyledMain = styled.main`
	background-color: ${colors.bg};
`

export const Header = styled.div`
	color: #fff;
	margin-bottom: 2rem;
`

const EditButton = styled.button`
	border-color: #00bc77;
	background-color: #00bc77;
	color: #fff;
	font-weight: bold;
	padding: 10px;
`
