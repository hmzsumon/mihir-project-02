import React from 'react';
import styled from 'styled-components';
import logo from '../../images/slsl-logo.png';
import twitter from '../../images/twitter.png';
import telegram from '../../images/telegram.png';
import social from '../../images/social.png';
import { animateScroll as scroll, Link } from 'react-scroll';

const NavbarNew = () => {
	return (
		<Wrapper>
			<div className='logo-connect' onClick={() => scroll.scrollToTop()}>
				<h1>sluggish sloths</h1>
			</div>

			<Nav>
				<NavItem onClick={() => scroll.scrollToTop()}>Home</NavItem>
				<NavItem>
					<Link to='collection' smooth={true} duration={500}>
						Collection
					</Link>
				</NavItem>
				<NavItem>
					<Link to='team' smooth={true} duration={500}>
						team
					</Link>
				</NavItem>
				<NavItem>
					<Link to='faq' smooth={true}>
						FAQ's
					</Link>
				</NavItem>

				<NavItem>
					<Link to='project' smooth={true}>
						Project
					</Link>
				</NavItem>
				<NavItem>
					<a
						target='_blank'
						href='https://medium.com/@sluggishslothsnft/the-sluggish-sloths-115b6c42a09f'
						rel='noreferrer'
					>
						Roadmap
					</a>
				</NavItem>
			</Nav>
			<Button>connect wallet</Button>
			<Icons>
				<a
					href='https://discord.gg/A6BVKccSvY'
					target='_blank'
					rel='noreferrer'
				>
					<img width='30px' src={social} alt='discord' />
				</a>
				<a href='https://t.me/SluggishSloths' target='_blank' rel='noreferrer'>
					<img width='30px' src={telegram} alt='telegram' />
				</a>
				<a
					href='https://twitter.com/SluggishSloths'
					target='_blank'
					rel='noreferrer'
				>
					<img width='30px' src={twitter} alt='twitter' />
				</a>
			</Icons>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	position: fixed;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 70px;
	left: 0;
	top: 0;
	background-color: #11272c;

	.logo-connect {
		margin-right: 1rem;
		h1 {
			color: #fff;
			font-size: 2rem;
		}
	}
`;

const Nav = styled.div`
	/* width: 40%; */
	padding: 0 1rem;
	/* background-color: red; */
	display: flex;
	gap: 1.5rem;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	height: auto;
	color: #fff;
`;
const NavItem = styled.li`
	font-weight: bold;
	cursor: pointer;
	font-size: 1.2rem;
	text-transform: capitalize;

	a {
		color: #fff;
		text-decoration: none;
	}
`;

const Button = styled.button`
	border: none;
	/* padding: 0%.5rem 1rem; */
	padding: 0 1rem;
	background-color: #fff;
	border-radius: 8px;
	font-size: 1.2rem;
	font-weight: bold;
	cursor: pointer;
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
`;

export default NavbarNew;
