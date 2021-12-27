import React from 'react';
import styled from 'styled-components';
import Img from '../../images02/toby_moon.png';

const About = () => {
	return (
		<Wrapper>
			<div>
				<h1>About</h1>
				<p>
					Toby is a goat that has never joined the herd like the others. Since
					childhood, he showed an adventurous spirit and willingness to explore
					the unknown. After years of doing his own research, Toby decided to
					leave his pasture life to embark on what will be the biggest adventure
					of his life. Determined to put goats in the history books, Toby moved
					to the Ethereum blockchain to be the first goat to go to the moon.
				</p>
			</div>
			<div>
				<img src={Img} alt='' />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	background-color: #2d4c52;
	color: #fff;
	width: 100vw;
	padding: 0 4rem;
	display: grid;
	grid-template-columns: 1fr 1fr;

	div:first-child {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 2rem;
		padding-left: 4rem;
		h1 {
			font-size: 2rem;
			text-align: left;
		}
	}

	div:last-child {
		img {
			width: 80%;
		}
	}
`;
export default About;
