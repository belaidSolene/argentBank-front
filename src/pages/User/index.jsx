import { Link, NavLink } from 'react-router-dom'

import { accountUser } from '../../data/accountUser'

import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import AccountCard from '../../components/AccountCard'

import styled from 'styled-components'
import { StyledNavLink } from '../../components/Navigation'

export default function User() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation>
				<StyledNavLink to={'/profil'}>
					<i class='fa fa-user-circle'></i>
					Tony
				</StyledNavLink>

				<StyledNavLink to={'/'} activeClassName='any'>
					<i class='fa fa-sign-out'></i>
					Sign Out
				</StyledNavLink>
			</Navigation>

			{/* Main Part of User Page */}
			<main className='main bg-dark'>
				{/* Header Main Part */}
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{/* Dynamic naming */}
						Tony Jarvis!
					</h1>

					{/* What does it do ? */}
					<button className='edit-button'>
						Edit Name
					</button>
				</div>

				{/* Accounts Part */}
				<h2 className='sr-only'>Accounts</h2>

				{accountUser.map(
					({ title, amount, description }) => (
						<AccountCard
							title={title}
							amount={amount}
							description={description}
						/>
					)
				)}
			</main>

			<Footer />
		</div>
	)
}
