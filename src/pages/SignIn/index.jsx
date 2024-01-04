/**
 * The 'SignIn' component represents the page where users can sign in.
 * It includes a navigation bar, a background section, a content section containing a sign-in icon, a title, and the login form,
 * and a footer.
 *
 * @component
 */
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

import LoginForm from '../../features/LoginForm'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Container } from '../Index'

export default function SignIn() {
	// JSX structure defining the Footer component layout
	return (
		<Container>
			<Navigation />

			<Bg>
				<Content>
					<i className='fa fa-user-circle sign-in-icon'></i>
					<h1>Sign In</h1>

					{/* Form to log in */}
					<LoginForm />
				</Content>
			</Bg>

			<Footer />
		</Container>
	)
}

// Styled components
const Bg = styled.main`
	background-color: ${colors.bg};
	padding-bottom: 4rem;
`
const Content = styled.section`
	box-sizing: border-box;
	background-color: ${colors.white};
	width: 300px;
	margin: 0 auto;
	margin-top: 3rem;
	padding: 2rem;
`
