import styled from 'styled-components'

import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'
import LoginForm from '../../features/LoginForm'

export default function SignIn() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation />

			<Bg>
				<Content>
					<i className='fa fa-user-circle sign-in-icon'></i>
					<h1>Sign In</h1>

					{/* Form to sign in */}
					<LoginForm />
				</Content>
			</Bg>

			<Footer />
		</div>
	)
}

const Bg = styled.main`
	background-color: #12002b;
	padding-bottom: 4rem;
`
const Content = styled.section`
	position: relative;
	top: 2rem;
	width: 200px;
	background: white;
	padding: 2rem;
	text-align: center;
	margin: 0 auto;
`
