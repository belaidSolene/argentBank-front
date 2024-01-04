/**
 * The AccountCard component represents a styled card displaying user account information.
 * It features a title, amount, and description along with a button to view transactions.
 * The styling is achieved using styled-components, and responsive design is implemented using media queries.
 *
 * @component
 * @param {Object} props - The properties of the AccountCard component.
 * @param {string} props.title - The title of the user account.
 * @param {string} props.amount - The amount associated with the user account.
 * @param {string} props.description - A description of the user account.
 * @returns {JSX.Element} AccountCard component.
 */

// Importing necessary dependencies for styling
import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import { colors } from '../../utils/style/colors'

export default function AccountCard({ title, amount, description }) {
	// JSX structure defining the AccountCard component layout
	return (
		<Account>
			{/* Content section */}
			<Content>
				<Title>{title}</Title>
				<Amount>{amount}</Amount>
				<Description>{description}</Description>
			</Content>

			{/* Call to Action (CTA) section */}
			<CTA>
				<TransactionButton>
					View transactions
				</TransactionButton>
			</CTA>
		</Account>
	)
}

// Styled components
const Account = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	background-color: #fff;
	width: 90%;
	margin: 0 auto;
	flex-direction: column;
	padding: 1.5rem;
	box-sizing: border-box;
	text-align: left;
	margin-bottom: 2rem;

	@media (${device.laptop}) {
		width: 80%;
		flex-direction: row;
	}
`

const Content = styled.div`
	width: 100%;
	flex: 1;
`

const Title = styled.h3`
	margin: 0;
	padding: 0;
	font-size: 1rem;
	font-weight: normal;
`

const Amount = styled.p`
	margin: 0;
	font-size: 2.5rem;
	font-weight: bold;
`

const Description = styled.p`
	margin: 0;
`

const CTA = styled(Content)`
	@media (${device.laptop}) {
		flex: 0;
	}
`

const TransactionButton = styled.button`
	display: block;
	width: 100%;
	padding: 8px;
	font-size: 1.1rem;
	font-weight: bold;
	margin-top: 1rem;
	border-color: ${colors.primary};
	background-color: ${colors.primary};
	color: #fff;

	@media (${device.laptop}) {
		width: 200px;
	}
`
