import React from 'react';
import styled from 'styled-components';
import Img from '../../images02/fur_image.png';

const UtilityToken = () => {
	return (
		<Wrapper>
			<Content>
				<Text>
					<h1>- Utility Token</h1>
					<p>
						To provide utility for our NFTs for years to come we will use $FUR,
						an Ethereum ERC-20 token for Toby The Goat (TTG) ecosystem. The
						owners of TTG will be able to obtain $FUR by using a method similar
						to staking, but better. Normally when you stake an NFT, you transfer
						its ownership to the contract that handles the staking. This
						requires you to spend gas every time you stake or unstake your NFT.
						Moreover, it prohibits you from selling your NFT while staking since
						you are not its owner during that time. To overcome these
						disadvantages, we will create a smart contract that allows you to
						start growing $FUR without having to transfer the ownership of your
						NFTs. A single transaction will be required to start, and after that
						the NFT will grow $FUR.
					</p>
				</Text>
				<img src={Img} alt='img' />
			</Content>
			<Footer>
				<h4>Read our Medium Articles</h4>
				<p>
					Check our Medium page if you want to know more about the token $FUR
					and our roadmap.
				</p>
				<button> to by ths sloths @ medium</button>
			</Footer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	background-color: #418f90;
	padding: 2rem;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	padding-bottom: 0;

	h1 {
		font-size: 2rem;
		color: #fff;
	}
`;

const Content = styled.div`
	display: flex;
	gap: 3rem;
	width: 80%;
`;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const Footer = styled.div`
	background-color: #2f4f55;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding: 2rem;

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

export default UtilityToken;
