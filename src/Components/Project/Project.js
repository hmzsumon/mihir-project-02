import React from 'react';
import styled from 'styled-components';
import Img from '../../images02/project_goat.png';

const Project = () => {
	return (
		<Wrapper id='project'>
			<Container>
				<Content>
					<Text>
						<h1>- Project</h1>
						<p>
							<span>"Toby The Goat",</span> or TTG for short, is an NFT
							collection that was born out of the passion of four friends for
							the Crypto ecosystem and the NFTs universe. Believing in the
							potential of the technology, Toby's team intends to launch new
							educational content with the aim of reducing the learning curve
							for the general public.
						</p>
						<p>
							<span>Education</span> is key to making blockchain and web3
							technology widely adopted by the public. A lot of times people
							don't have the time or are too afraid to do their research into
							topics they don't fully understand.
						</p>
						<p>
							<span>Toby The Goat is a symbiosis between art and utility.</span>{' '}
							We want to educate people through animation and board games, make
							Crypto an educational theme that younger and older generations
							will find interesting and start to adopt in their daily lives.
						</p>
						<h4>- Project</h4>
					</Text>
					<Image>
						<img src={Img} alt='Project' />
					</Image>
				</Content>
			</Container>
			<Footer>
				<h4>Interact with the community</h4>
				<p>
					Join our Discord and don't miss all the giveaways and contests to win
					a TOBY THE GOAT NFT
				</p>
				<button> join discord</button>
			</Footer>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #11272c;
	margin: 5rem 0;
`;
const Container = styled.div`
	width: 75%;
	margin-bottom: 5rem;
`;
const Content = styled.div`
	display: flex;
	align-items: center;
	gap: 3rem;
`;
const Text = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	span {
		font-weight: bold;
	}
`;
const Image = styled.div``;
const Footer = styled.div`
	background-color: #418f90;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	padding: 4rem;
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

export default Project;
