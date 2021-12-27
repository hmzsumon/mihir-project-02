import React from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from 'react-accessible-accordion';
import { Container, Row, Col } from 'react-bootstrap';

// import open from '../../assets/images/open.png'
// import closed from '../../assets/images/closed.png'

import styled from 'styled-components';

const faqs = [
	{
		q: 'What blockchain are the Sluggish Sloths on?',
		a: 'The Sluggish Sloths can be found hanging around the Binance Smart Chain.',
	},
	{
		q: 'What is the total supply?',
		a: 'There are 9,999 Sluggish Sloths available.',
	},
	{
		q: 'What is the Mint price?',
		a: '.18 BNB.',
	},
	{
		q: 'What benefits do I get for adopting?',
		a: "We're giving 5% of reflection rewards to minters. Mint early to maximize rewards. Additionally, 2% of all minting automatically goes into a lottery fund where 15 lucky minters will be chosen randomly and win BNB sent straight to your wallet!",
	},
	{
		q: 'When is launch?',
		a: 'Friday November 12th 2021 @ 12:00 PM PST / 8:00 PM UTC / 2:00 PM CST.',
	},
];

const Title = styled.h3`
	text-transform: uppercase;
	font-size: 40px;
	font-weight: 700;
	font-family: 'brln', sans-serif;
	text-align: center;
	margin-bottom: 25px !important;

	margin-top: 25px !important;
	color: #11272c;
`;

const AItem = styled(AccordionItem)`
	padding: 10px 32px;
	cursor: pointer;
	color: #11272c;
	/* background: red; */
	border: 1px solid #11272c;
	border-radius: 1rem;

	margin-bottom: 15px;

	@media (max-width: 1023px) {
	}
`;

const Question = styled.p`
	font-family: 'arco', 'arco2', sans-serif !important;
	font-size: 20px;
	font-weight: 700;
	color: #11272c;
`;

const QuestionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #11272c;
`;

const AIState = styled.div`
	font-family: 'arco', 'arco2', sans-serif !important;
	font-size: 20px;
	font-weight: 700;
	color: #11272c;
`;

const AIButton = styled(AccordionItemButton)`
	font-size: 2.5rem;
	font-family: 'Cheapsman-Free-Regular';
	color: #11272c;
`;

const AccordionContent = styled.p`
	margin-top: 12px !important;
	color: #11272c;

	@media (max-width: 1023px) {
	}
`;

export default class Faqs extends React.Component {
	render() {
		return (
			<div id='faq'>
				<Container>
					<Row>
						<Title>FAQ</Title>
					</Row>
					<Row className='justify-content-md-center py-4'>
						<Col lg='10'>
							<Accordion allowZeroExpanded={true}>
								{faqs.map((faq) => {
									return (
										<AItem key={faq.q}>
											<AccordionItemHeading>
												<AIButton>
													<QuestionContainer>
														<Question>{faq.q}</Question>
														<AIState>
															<AccordionItemState>
																{(state) => {
																	return state.expanded ? 'x' : '+';
																}}
															</AccordionItemState>
														</AIState>
													</QuestionContainer>
												</AIButton>
											</AccordionItemHeading>
											<AccordionItemPanel>
												<AccordionContent>{faq.a}</AccordionContent>
											</AccordionItemPanel>
										</AItem>
									);
								})}
							</Accordion>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
