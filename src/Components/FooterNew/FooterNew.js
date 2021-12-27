import React from 'react';
import styled from 'styled-components';
import Img from '../../images02/bg_footer.png';
import twitter from '../../images/twitter.png';
import telegram from '../../images/telegram.png';
import social from '../../images/social.png';

const FooterNew = () => {
	return (
		<Wrapper>
			<h1>- Follow Toby The sloths -</h1>
			<Social>
				<li>
					<a
						href='https://discord.gg/A6BVKccSvY'
						target='_blank'
						rel='noreferrer'
					>
						<img src={social} alt='#' />
					</a>
				</li>

				<li>
					<a
						href='https://t.me/SluggishSloths'
						target='_blank'
						rel='noreferrer'
					>
						<img src={telegram} alt='#' />
					</a>
				</li>

				<li>
					<a
						href='https://twitter.com/SluggishSloths'
						target='_blank'
						rel='noreferrer'
					>
						<img src={twitter} alt='#' />
					</a>
				</li>
			</Social>
			{/* <img src={Img} alt='Footer' /> */}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	background: url(${Img});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	padding: 3rem 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	color: #fff;
`;
const Social = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;
	padding-bottom: 10rem;

	li {
		list-style: none;
		cursor: pointer;
		border: 2px dashed #fff;
		padding: 3rem;
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
	}
`;

export default FooterNew;
