import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../images02/upgrade.png';
import Icon2 from '../../images02/percentage.png';
import Icon3 from '../../images02/art.png';
import Icon4 from '../../images02/youtube_ad.png';

const UseCases = () => {
	return (
		<Wrapper>
			<Container>
				<h1>- $FUR Use cases</h1>
				<p>We have several use cases for our token, these include:</p>
				<ItemContainer>
					<Item>
						<Text>
							<h3>Upgrades on your NFT</h3>
							<p>
								Using $FUR you will be able to upgrade your NFT using art
								elements that were not available in the original collection. You
								will have different paths to choose from, and it's up to you to
								decide where you start your upgrades.
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
							<h3>Discounts on merchandising</h3>
							<p>
								Discounts on merchandising The more tokens the higher the
								discount leading up to bare manufacturing cost on all articles
								from the merch store, board game included
							</p>
						</Text>
					</Item>

					<Item>
						<Text>
							<h3>Special order from Leitov</h3>
							<p>
								If you save up your $FUR, you will be able to pay our
								illustrator to send you an original piece of art piece with Toby
								The Goat as the theme
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
							<h3>Advertisement</h3>
							<p>
								With sufficient $FUR you will be able to pay for us to share a
								message or promote anything you want on the upcoming animation
								videos on our YouTube channel (Excluding content that can be
								considered offensive or inappropriate)
							</p>
						</Text>
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
		text-align: left;
	}
	p {
		font-size: 1.2rem;
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
	gap: 4rem;
`;
const Text = styled.div`
	h3 {
		font-size: 1rem;
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

export default UseCases;
