export default function User() {
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
					{/* Liens pages User & Index */}
					<a class='main-nav-item' href='./user.html'>
						<i class='fa fa-user-circle'></i>
						Tony
					</a>
					<a class='main-nav-item' href='./index.html'>
						<i class='fa fa-sign-out'></i>
						Sign Out
					</a>
				</div>
			</nav>

			{/* Main Part of User Page */}
			<main class='main bg-dark'>
				{/* Header Main Part */}
				<div class='header'>
					<h1>
						Welcome back
						<br />
						{/* Dynamic naming */}
						Tony Jarvis!
					</h1>

					{/* What does it do ? */}
					<button class='edit-button'>
						Edit Name
					</button>
				</div>

				{/* Accounts Part */}
				<h2 class='sr-only'>Accounts</h2>

				{/* Account Card */}
				{/* div -> h3 > p > p / div --> button */}
				<section class='account'>
					{/* Account content */}
					<div class='account-content-wrapper'>
						<h3 class='account-title'>
							Argent Bank Checking (x8349)
						</h3>
						<p class='account-amount'>
							$2,082.79
						</p>
						<p class='account-amount-description'>
							Available Balance
						</p>
					</div>

					{/* Button info transations */}
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>
							View transactions
						</button>
					</div>
				</section>

				{/* Account Card */}
				<section class='account'>
					<div class='account-content-wrapper'>
						<h3 class='account-title'>
							Argent Bank Savings (x6712)
						</h3>
						<p class='account-amount'>
							$10,928.42
						</p>
						<p class='account-amount-description'>
							Available Balance
						</p>
					</div>
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>
							View transactions
						</button>
					</div>
				</section>

				{/* Account Card */}
				<section class='account'>
					<div class='account-content-wrapper'>
						<h3 class='account-title'>
							Argent Bank Credit Card (x8349)
						</h3>
						<p class='account-amount'>$184.30</p>
						<p class='account-amount-description'>
							Current Balance
						</p>
					</div>
					<div class='account-content-wrapper cta'>
						<button class='transaction-button'>
							View transactions
						</button>
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
