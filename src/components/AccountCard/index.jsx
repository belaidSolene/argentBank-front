import styled from 'styled-components'
import { device } from '../../utils/style/breakpoints'
import { colors } from '../../utils/style/colors'

export default function AccountCard({ title, amount, description }) {
	return (
		<Account>
			<Content>
				<Title>{title}</Title>
				<Amount>{amount}</Amount>
				<Description>{description}</Description>
			</Content>

			<CTA>
				<TransactionButton>
					View transactions
				</TransactionButton>
			</CTA>
		</Account>
	)
}

const Account = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
	background-color: #fff;
	width: 80%;
	margin: 0 auto;
	flex-direction: column;
	padding: 1.5rem;
	box-sizing: border-box;
	text-align: left;
	margin-bottom: 2rem;

	@media (${device.laptop}) {
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
