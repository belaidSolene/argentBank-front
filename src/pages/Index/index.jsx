import { featuresIndex } from '../../data/featuresIndex'

import FeatureCard from '../../components/FeatureCard'
import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import Footer from '../../components/Footer'

export default function Index() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			{/* Header */}
			{/* Main nav */}
			<nav className='main-nav'>
				{/* Logo retour page Index */}
				<a class='main-nav-logo' href='./index.html'>
					<img
						className='main-nav-logo-image'
						src='./img/argentBankLogo.png'
						alt='Argent Bank Logo'
					/>
					<h1 class='sr-only'>Argent Bank</h1>
				</a>

				{/* Evolve with pages */}
				<div>
					{/* Lien page SignIn */}
					<a
						class='main-nav-item'
						href='./sign-in.html'
					>
						<i class='fa fa-user-circle'></i>
						Sign In
					</a>
				</div>
			</nav>

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
