/**
 * The Footer component represents the footer section of the application.
 * It includes copyright information and is styled using styled-components.
 *
 * @component
 * @returns {JSX.Element} Footer component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'

export default function Footer() {
	// JSX structure defining the Footer component layout
	return (
		<FooterWrapper>
			<Copyright>Copyright 2023 Argent Bank</Copyright>
		</FooterWrapper>
	)
}

// Styled components
const FooterWrapper = styled.footer`
	display: flex;
	justify-content: center;
	border-top: 2px solid #ccc;
	padding: 2rem 0 1.5rem;
`

const Copyright = styled.p`
	margin: 0;
	padding: 0;
`
