import styled from 'styled-components'

export default function Footer() {
	return (
		<FooterWrapper>
			<Copyright>Copyright 2023 Argent Bank</Copyright>
		</FooterWrapper>
	)
}

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
