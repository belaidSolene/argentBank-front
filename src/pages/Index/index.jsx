export default function Index() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			{/* Header */}
			{/* Main nav */}
			<nav class='main-nav'>
				{/* Logo retour page Index */}
				<a class='main-nav-logo' href='./index.html'>
					<img
						class='main-nav-logo-image'
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

				{/* "white lies" Part */}
				<section class='features'>
					<h2 class='sr-only'>Features</h2>

					{/* Feature Card */}
					{/* img > h3 > p */}
					<div class='feature-item'>
						<img
							src='./img/icon-chat.png'
							alt='Chat Icon'
							class='feature-icon'
						/>
						<h3 class='feature-item-title'>
							You are our #1 priority
						</h3>
						<p>
							Need to talk to a
							representative? You can get in
							touch through our 24/7 chat or
							through a phone call in less
							than 5 minutes.
						</p>
					</div>

					{/* Feature Card */}
					<div class='feature-item'>
						<img
							src='../assets/icon-money.png'
							alt='Chat Icon'
							class='feature-icon'
						/>
						<h3 class='feature-item-title'>
							More savings means higher rates
						</h3>
						<p>
							The more you save with us, the
							higher your interest rate will
							be!
						</p>
					</div>

					{/* Feature Card */}
					<div class='feature-item'>
						<img
							src='./img/icon-security.png'
							alt='Chat Icon'
							class='feature-icon'
						/>
						<h3 class='feature-item-title'>
							Security you can trust
						</h3>
						<p>
							We use top of the line
							encryption to make sure your
							data and money is always safe.
						</p>
					</div>
				</section>
			</main>

			{/* Footer not dynamic */}
			<footer class='footer'>
				<p class='footer-text'>
					Copyright 2023 Argent Bank
				</p>
			</footer>
		</div>
	)
}
