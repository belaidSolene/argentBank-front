/**
 * The 'Error' component represents the page displayed when a user encounters a 404 error.
 * It includes a navigation bar, a message indicating the page is not found, and a link to return to the homepage.
 *
 * @component
 */

import Navigation from '../../components/Navigation'
import { Link } from 'react-router-dom'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { colors } from '../../utils/style/colors'
import { Container } from '../Index'

export default function Error() {
	// JSX structure defining the Footer component layout
	return (
		<Container>
			<Navigation />
			<WrapperError>
				<Title>404 - Page Not Found</Title>

				<Subtitle>
					The page you are looking for does not exist.
				</Subtitle>

				<StyleLink to='/'>Back to Homepage</StyleLink>
			</WrapperError>
		</Container>
	)
}

// Styled components
const WrapperError = styled.div`
	height: 700px;
	text-align: center;
	margin-top: 5rem;
`

const Title = styled.h1`
	font-size: 5rem;
	font-weight: 500;
	color: ${colors.secondary};
	margin: 0;
`

const Subtitle = styled.h2`
	margin: 2rem 0;
	font-size: 2rem;
	color: ${colors.primary};
	font-weight: 500;
`

const StyleLink = styled(Link)`
	margin-top: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-decoration: underline;
	color: ${colors.secondary};
`
