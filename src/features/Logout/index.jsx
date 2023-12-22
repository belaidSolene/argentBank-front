import { useDispatch } from 'react-redux'
import { StyledNavLink } from '../../components/Navigation'
import { logout } from '../../features/auth/authSlice'

export default function Logout() {
	const dispatch = useDispatch()

	return (
		<StyledNavLink to={'/'} onClick={() => dispatch(logout())}>
			<i className='fa fa-sign-out'></i>
			Sign Out
		</StyledNavLink>
	)
}
