import AccountCard from '../../components/AccountCard'
import Footer from '../../components/Footer'
import { accountUser } from '../../data/accountUser'

export default function User() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			{/* Header */}
			{/* Main nav */}
			<nav className='main-nav'>
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
			<main className='main bg-dark'>
				{/* Header Main Part */}
				<div className='header'>
					<h1>
						Welcome back
						<br />
						{/* Dynamic naming */}
						Tony Jarvis!
					</h1>

					{/* What does it do ? */}
					<button className='edit-button'>
						Edit Name
					</button>
				</div>

				{/* Accounts Part */}
				<h2 className='sr-only'>Accounts</h2>

				{accountUser.map(
					({ title, amount, description }) => (
						<AccountCard
							title={title}
							amount={amount}
							description={description}
						/>
					)
				)}
			</main>

			<Footer />
		</div>
	)
}
