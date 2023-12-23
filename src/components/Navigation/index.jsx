import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/argentBankLogo.png'

import Logout from '../../features/Logout'

import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { colors } from '../../utils/style/colors'

export default function Navigation({ firstName }) {
	const { success } = useSelector((state) => state.auth)

	return (
		<Nav>
			<LogoLink to={'/'}>
				<StyleLogo src={Logo} alt='Argent Bank Logo' />
				<h1 className='sr-only'>Argent Bank</h1>
			</LogoLink>

			{success ? (
				<NavUser>
					<StyledNavLink to={'/profile'}>
						<i className='fa fa-user-circle'></i>
						<span>{firstName}</span>
					</StyledNavLink>

					<Logout />
				</NavUser>
			) : (
				<StyledNavLink to={'/login'}>
					<i className='fa fa-user-circle'></i>
					<span>Sign In</span>
				</StyledNavLink>
			)}
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
