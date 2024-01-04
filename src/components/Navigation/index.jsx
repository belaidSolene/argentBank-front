/**
 * The Navigation component represents the application's navigation bar.
 * It includes links to the home page, and a sign-in link by default.
 * If the user is authenticated, it displays a link to the user profile and a logout link.
 * The styling is achieved using styled-components.
 *
 * @component
 * @returns {JSX.Element} Navigation component.
 */
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Logo from '../../assets/argentBankLogo.png'
import Logout from '../../features/Logout'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function Navigation() {
	// Selecting authentication state and user profile information from the Redux store
	const { success, userProfile } = useSelector((state) => state.auth)

	// JSX structure defining the Footer component layout
	return (
		<Nav>
			{/* Logo and home page link */}
			<LogoLink to={'/'}>
				<StyleLogo src={Logo} alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</LogoLink>

			{/* Conditional rendering based on user authentication status */}
			{success ? (
				// Rendered when the user is authenticated
				<NavUser>
					<StyledNavLink to={'/profile'}>
						<i className='fa fa-user-circle'></i>
						<span>{userProfile.firstName}</span>
					</StyledNavLink>

					<Logout />
				</NavUser>
			) : (
				// Rendered when the user is not authenticated
				<StyledNavLink to={'/login'}>
					<i className='fa fa-user-circle'></i>
					<span>Sign In</span>
				</StyledNavLink>
			)}
		</Nav>
	)
}

// Styled components
const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 20px;
`
const LogoLink = styled(Link)`
	display: flex;
	align-items: center;
`

const StyleLogo = styled.img`
	max-width: 100%;
	width: 200px;
`

const NavUser = styled.div`
	display: flex;
	gap: 0.5rem;
`

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	margin-right: 0.5rem;
	font-weight: bold;
	color: ${colors.secondary};

	&:hover {
		text-decoration: underline;
	}

	&.active {
		color: ${colors.activeLink};
	}

	span {
		margin-left: 0.3rem;
	}
`
