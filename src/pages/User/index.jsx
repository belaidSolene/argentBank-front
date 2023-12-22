import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setProfile } from '../../features/auth/authSlice'

import { useUserProfileQuery } from '../../features/api/api'
import { accountUser } from '../../data/accountUser'

import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AccountCard from '../../components/AccountCard'

export default function User() {
	const { success, userProfile } = useSelector((state) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data } = useUserProfileQuery()

	useEffect(() => {
		if (success && data) {
			dispatch(setProfile(data.body))
		} else {
			navigate('/login')
		}
	}, [dispatch, navigate, success, data])

	const { firstName, lastName } = userProfile

	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation firstName={firstName} />

			{/* Main Part of User Page */}
			<main className='main bg-dark'>
				{/* Header Main Part */}
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{/* Dynamic naming */}
						{firstName} {lastName}!
					</h1>

					{/* What does it do ? */}
					<button className='edit-button'>
						Edit Name
					</button>
				</div>

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
