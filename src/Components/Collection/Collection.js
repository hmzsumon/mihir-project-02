import React from 'react';
import styled from 'styled-components';
import img1 from '../../images02/22.png';
import img2 from '../../images02/23.png';
import img3 from '../../images02/24.png';
import img4 from '../../images02/25.png';
import img5 from '../../images02/26.png';
import img6 from '../../images02/27.png';
import img7 from '../../images02/28.png';
import img8 from '../../images02/29.png';

const images = [
	{
		id: 1,
		src: img1,
	},
	{
		id: 2,
		src: img2,
	},
	{
		id: 3,
		src: img3,
	},
	{
		id: 4,
		src: img4,
	},
	{
		id: 5,
		src: img5,
	},
	{
		id: 6,
		src: img6,
	},
	{
		id: 7,
		src: img7,
	},
	{
		id: 8,
		src: img8,
	},
];

const Collection = () => {
	return (
		<Wrapper id='collection'>
			<Content>
				<h1>The Collection</h1>
				<p>
					Our Toby The Goat Non-Fungible Token (NFT) collection consists of 9999
					items that were dynamically generated through computer software based
					on more than 350 unique traits created by Leitov, our illustrator.
					From simple expressions to themed hoodies and masks, our team has put
					in the time and effort to create a quality NFT that makes us proud to
					call it our own. With Toby The Goat, we offer a perfect symbiosis
					between art and utility. Owning a Toby The Goat is much more than
					owning a beautifully crafted goat, it's a gateway to utility,
					contests, giveaways, and making NFTs more mainstream. Go through our
					website to discover how we are bringing utility to our NFT and check
					out the roadmap to find out what we have planned for this project.
				</p>
			</Content>
			<Images>
				{images.map((image) => (
					<img src={image.src} alt='img' />
				))}
			</Images>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 2rem;
	width: 100vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
`;
const Content = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 75%;

	h1 {
		font-size: 2rem;
		color: #11272c;
		text-align: left;
	}
`;
const Images = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	width: 75%;

	img {
		width: 23.5%;
		border-radius: 10px;
	}
`;

export default Collection;
