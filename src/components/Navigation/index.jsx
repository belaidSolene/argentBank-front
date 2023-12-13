import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/argentBankLogo.png'

import styled from 'styled-components'

export default function Navigation({ children }) {
	return (
		<Nav>
			<LogoLink to={'/'}>
				<LogoStyle src={Logo} alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</LogoLink>

			{/* Evolves with pages */}
			<div>
				{children ? (
					children
				) : (
					<StyledNavLink to={'/login'}>
						<i class='fa fa-user-circle'></i>
						<span>Sign In</span>
					</StyledNavLink>
				)}
			</div>
		</Nav>
	)
}

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

const LogoStyle = styled.img`
	max-width: 100%;
	width: 200px;
`
export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	margin-right: 0.5rem;
	font-weight: bold;
	color: #2c3e50;

	&:hover {
		text-decoration: underline;
	}

	&.active {
		color: #42b983;
	}
`
