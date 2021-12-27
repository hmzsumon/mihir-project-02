import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../images02/start.png';
import Icon2 from '../../images02/tshirt.png';
import Icon3 from '../../images02/boardgame.png';
import Icon4 from '../../images02/goat.png';
import Icon5 from '../../images02/end.png';

const RoadmapNew = () => {
	return (
		<Wrapper id='roadmap'>
			<Container>
				<h1>- Roadmap -</h1>

				<ItemContainer>
					<Item>
						<Text>
							<h3>0% Sold</h3>
							<p>
								Before the release, we will pre-mint up to a maximum 200 random
								Toby The Goat NFTs for the team and promoting purposes, such as
								giveaways to grow our community.
							</p>
						</Text>
						<Icon>
							<img src={Icon1} alt='icon' />
						</Icon>
					</Item>

					<Item>
						<Icon>
							<img src={Icon2} alt='icon' />
						</Icon>
						<Text>
							<h3>10% Sold</h3>
							<p>
								5 giveaways of 1 Ether each exclusive for Toby The Goat NFT
								owners.
							</p>
						</Text>
					</Item>

					<Item>
						<Text>
							<h3>25% Sold</h3>
							<p>
								Launch of our crypto based board game through the merch store.
								The board game will be available for everyone, TTG owners will
								benefit from a 25% discount.
							</p>
						</Text>
						<Icon>
							<img src={Icon3} alt='icon' />
						</Icon>
					</Item>

					<Item>
						<Icon>
							<img src={Icon4} alt='icon' />
						</Icon>
						<Text>
							<h3>75% Sold</h3>
							<p>
								Monthly educational animated videos featuring random Toby's,
								aimed at reducing the learning curve for Cryptocurrency and NFTs
								in general. Art contest exclusive for Toby owners, a total of 8
								Ether will be distributed to the 10 most voted art elements.
							</p>
						</Text>
					</Item>

					<Item>
						<Text>
							<h3>100% Sold</h3>
							<p>
								Time to give back to our country (Portugal) and our supporters.
								We will donate, to an institution selected by the community, 100
								000€ towards the education of our children. We will also launch
								a second (AND FINAL) collection available only for Toby owners –
								Timmy Little Goat. For each Toby in your wallet you will be able
								to mint a little Timmy and pay only the cost of gas.
							</p>
						</Text>
						<Icon>
							<img src={Icon5} alt='icon' />
						</Icon>
					</Item>
				</ItemContainer>
			</Container>
			<Footer>
				<h4> Follow us on Twitter!</h4>
				<p>Don't lose any activity from Toby.</p>
				<button> join twitter</button>
			</Footer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Container = styled.div`
	width: 75%;
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin-bottom: 5rem;
	h1 {
		font-size: 2rem;
		color: #11272c;
		text-align: center;
	}
`;
const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;
const Item = styled.div`
	display: flex;

	align-items: center;
	gap: 10rem;
`;
const Text = styled.div`
	width: 50%;
	h3 {
		font-size: 2rem;
		background-color: #327281;
		padding: 1rem 1.5rem !important;
		text-align: center;
		color: #fff;
		border-radius: 10px;
		margin-bottom: 1rem !important;
	}
`;
const Icon = styled.div`
	img {
		width: 15rem;
	}
`;

const Footer = styled.div`
	background-color: #2f4f55;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem;
	color: #fff;

	button {
		background-color: #cca300;
		color: #000;
		font-weight: bold;
		text-transform: uppercase;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 5px;
	}
`;

export default RoadmapNew;
