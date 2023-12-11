import Footer from '../../components/Footer'

export default function SignIn() {
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

			{/* Main Part of SignIn Page */}
			<main class='main bg-dark'>
				{/* Text - white bg */}
				<section class='sign-in-content'>
					{/* Header */}
					<i class='fa fa-user-circle sign-in-icon'></i>
					<h1>Sign In</h1>

					{/* Form to sign in */}
					<form>
						{/* Username input */}
						<div class='input-wrapper'>
							<label for='username'>
								Username
							</label>
							<input
								type='text'
								id='username'
							/>
						</div>

						{/* Password input */}
						<div class='input-wrapper'>
							<label for='password'>
								Password
							</label>
							<input
								type='password'
								id='password'
							/>
						</div>

						{/* Remerber me input */}
						<div class='input-remember'>
							<input
								type='checkbox'
								id='remember-me'
							/>
							<label for='remember-me'>
								Remember me
							</label>
						</div>

						{/* Button submit */}
						<button
							type='submit'
							class='sign-in-button'
						>
							Sign In
						</button>
					</form>
				</section>
			</main>

			<Footer />
		</div>
	)
}
