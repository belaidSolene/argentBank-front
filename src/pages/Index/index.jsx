import { featuresIndex } from '../../data/featuresIndex'

import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import FeatureCard from '../../components/FeatureCard'

import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'

export default function Index() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation />

			{/* Main Part of Index Page */}
			<main>
				{/* First part, "plant" */}
				<div class='hero'>
					<section class='hero-content'>
						<h2 class='sr-only'>
							Promoted Content
						</h2>
						<p class='subtitle'>No fees.</p>
						<p class='subtitle'>
							No minimum deposit.
						</p>
						<p class='subtitle'>
							High interest rates.
						</p>
						<p class='text'>
							Open a savings account with
							Argent Bank today!
						</p>
					</section>
				</div>

				<Features>
					<h2 class='sr-only'>Features</h2>

					{featuresIndex.map(
						({ img, title, content }) => (
							<FeatureCard
								img={img}
								title={title}
								content={content}
							/>
						)
					)}
				</Features>
			</main>

			<Footer />
		</div>
	)
}

const Features = styled.section`
	display: flex;
	flex-direction: column;

	@media (${device.laptop}) {
		flex-direction: row;
	}
`
