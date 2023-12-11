import styled from 'styled-components'

export default function FeatureCard({ img, title, content }) {
	return (
		<Card>
			<Icon src={img.src} alt={img.alt} />
			<Title>{title}</Title>
			<p>{content}</p>
		</Card>
	)
}

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
