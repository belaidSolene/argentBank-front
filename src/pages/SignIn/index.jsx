import styled from 'styled-components'

import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import LoginForm from '../../features/LoginForm'
import { Container } from '../Index'
import { colors } from '../../utils/style/colors'

export default function SignIn() {
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
