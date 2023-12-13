import Footer from '../../components/Footer'
import Navigation from '../../components/Navigation'

export default function SignIn() {
	return (
		/* Title "Argent Bank - Home Page"*/

		<div>
			<Navigation />

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
