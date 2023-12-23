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

import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Container } from '../Index'

export default function User() {
	const { success, userProfile } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data: userProfileData } = useGetProfileQuery()

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
		<Container>
			<Navigation />

			<StyledMain>
				{isEditing ? (
					<EditName
						firstName={firstName}
						lastName={lastName}
						onSave={saveEditedName}
						onCancel={toggleEditing}
					/>
				) : (
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
