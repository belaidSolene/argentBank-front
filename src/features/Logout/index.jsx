/**
 * The Logout component represents a styled link for logging out the user.
 * It utilizes React Router's NavLink for navigation to the home page and dispatches the 'logout' action using Redux.
 * The styling is achieved using styled-components.
 *
 * @component
 * @returns {JSX.Element} Logout component.
 */
import { useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'
import { NavLink } from 'react-router-dom'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'

export default function Logout() {
	// Redux dispatch function
	const dispatch = useDispatch()

	// JSX structure defining the Footer component layout
	return (
		<StyleLogout to={'/'} onClick={() => dispatch(logout())}>
			<i className='fa fa-sign-out'></i>
			<span>Sign Out</span>
		</StyleLogout>
	)
}

// Styled components
const StyleLogout = styled(NavLink)`
	text-decoration: none;
	margin-right: 0.5rem;
	font-weight: bold;
	color: ${colors.secondary};

	&:hover {
		text-decoration: underline;
	}

	span {
		margin-left: 0.3rem;
	}
`
