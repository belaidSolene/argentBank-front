/**
 * The FeatureCard component represents a styled card featuring an icon, title, and content.
 * It is designed for displaying features on the landing page.
 * The styling is achieved using styled-components.
 *
 * @component
 * @param {Object} props - The properties of the FeatureCard component.
 * @param {Object} props.img - The image object containing the source and alt text for the icon.
 * @param {string} props.title - The title of the feature.
 * @param {string} props.content - The content or description of the feature.
 * @returns {JSX.Element} FeatureCard component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'

export default function FeatureCard({ img, title, content }) {
	// JSX structure defining the FeatureCard component layout
	return (
		<Card>
			<Icon src={img.src} alt={img.alt} />
			<Title>{title}</Title>
			<p>{content}</p>
		</Card>
	)
}

// Styled components
const Card = styled.article`
	flex: 1;
	padding: 2.5rem;
`

const Title = styled.h3`
	color: #222;
	font-size: 1.25rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
`

const Icon = styled.img`
	width: 100px;
	border: 10px solid #00bc77;
	border-radius: 50%;
	padding: 1rem;
`
