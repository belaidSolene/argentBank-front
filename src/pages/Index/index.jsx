/**
 * The 'Index' component represents the main landing page of the application.
 * It includes a navigation bar, a hero section with promotional content, a section showcasing features using FeatureCard components,
 * and a footer.
 *
 * @component
 */

import { featuresIndex } from '../../data/featuresIndex'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FeatureCard from '../../components/FeatureCard'

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import bgHero from '../../assets/bank-tree.jpeg'

export default function Index() {
	// JSX structure defining the Footer component layout
	return (
		<Container>
			<Navigation />

			<main>
				{/* Hero Section */}
				<Hero>
					<HeroContent>
						<h2 className='sr-only'>
							Promoted Content
						</h2>

						<Subtitle>No fees.</Subtitle>

						<Subtitle>
							No minimum deposit.
						</Subtitle>

						<Subtitle>
							High interest rates.
						</Subtitle>

						<Text>
							Open a savings account with
							Argent Bank today!
						</Text>
					</HeroContent>
				</Hero>

				{/* Features Section */}
				<Features>
					<h2 className='sr-only'>Features</h2>

					{featuresIndex.map(
						({ img, title, content }, index) => (
							<FeatureCard
								img={img}
								title={title}
								content={content}
								key={index}
							/>
						)
					)}
				</Features>
			</main>

			<Footer />
		</Container>
	)
}

// Styled components
export const Container = styled.div`
	margin: 0;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`

const Hero = styled.div`
	background-image: url(${bgHero});
	background-position: 0 -50px;
	background-size: cover;
	background-repeat: no-repeat;
	height: 300px;
	position: relative;

	@media (${device.laptop}) {
		height: 400px;
		background-position: 0% 33%;
	}
`

const HeroContent = styled.section`
	position: relative;
	top: 2rem;
	width: 200px;
	background: white;
	padding: 2rem;
	text-align: left;
	margin: 0 auto;

	@media (${device.laptop}) {
		position: absolute;
		top: 50px;
		right: 50px;
		width: 300px;
		margin: 2rem;
	}
`

const Subtitle = styled.p`
	font-weight: bold;
	font-size: 1rem;
	margin: 0;

	@media (${device.laptop}) {
		font-size: 1.5rem;
	}
`

const Text = styled.p`
	margin-bottom: 0;
	font-size: 0.9rem;

	@media (${device.laptop}) {
		font-size: 1.2rem;
	}
`

const Features = styled.section`
	display: flex;
	flex-direction: column;

	@media (${device.laptop}) {
		flex-direction: row;
	}
`
