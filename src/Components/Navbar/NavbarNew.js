import React from 'react';
import styled from 'styled-components';
import logo from '../../images/slsl-logo.png';
import * as FaIcons from 'react-icons/fa';
import twitter from '../../images/twitter.png';
import telegram from '../../images/telegram.png';
import social from '../../images/social.png';
import { animateScroll as scroll, Link } from 'react-scroll';

const menuItems = [
	{
		text: 'collection',
		url: 'collection',
	},
	{
		text: 'team',
		url: 'team',
	},
	{
		text: "FAQ's",
		url: 'faq',
	},
	{
		text: 'project',
		url: 'project',
	},
];

const NavbarNew = () => {
	const [active, setActive] = React.useState(false);

	const handleActive = () => setActive(!active);
	console.log(active);
	return (
		<>
			<Wrapper>
				<div className='logo-connect' onClick={() => scroll.scrollToTop()}>
					<h1>sluggish sloths</h1>
				</div>
				{/* <MobileMenu onClick={handleActive}>
					<FaIcons.FaBars className='iconBar' />
				</MobileMenu> */}
				<Nav>
					<NavItem onClick={() => scroll.scrollToTop()}>Home</NavItem>
					<NavItem>
						<Link to='collection' smooth={true} duration={500}>
							Collection
						</Link>
					</NavItem>
					{/* <NavItem>
						<Link to='team' smooth={true} duration={500}>
							team
						</Link>
					</NavItem> */}
					{/* <NavItem>
						<Link to='faq' smooth={true}>
							FAQ's
						</Link>
					</NavItem> */}

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
					<a
						href='https://t.me/SluggishSloths'
						target='_blank'
						rel='noreferrer'
					>
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
			{/* <SideNav>
				<ul className={active ? 'side-nav side-nav-active' : 'side-nav'}>
					<button>X</button>
					{menuItems.map((item, index) => (
						<Link
							to={item.url}
							smooth={true}
							duration={500}
							key={index}
							onClick={handleActive}
						>
							<li key={index}>{item.text}</li>
						</Link>
					))}
				</ul>
			</SideNav> */}
		</>
	);
};

const Wrapper = styled.div`
	position: fixed;
	padding: 0.5rem 2rem;
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

	/* @media only screen and (max-width: 767px) {
		display: none;
	} */
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
	/* @media only screen and (max-width: 767px) {
		display: none;
	} */
`;

const Icons = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	/* @media only screen and (max-width: 767px) {
		display: none;
	} */
`;

// const MobileMenu = styled.div`
// 	display: none;
// 	.iconBar {
// 		color: #fff;
// 		cursor: pointer;
// 		font-size: 2rem;
// 	}

// 	@media only screen and (max-width: 767px) {
// 		display: block;
// 		.side-nav {
// 			width: 100vw;
// 		}
// 	}
// `;

// const SideNav = styled.div`
// 	display: none;
// 	color: #fff;
// 	button {
// 		padding: 1rem;
// 		border: none;
// 		background-color: #11272c;
// 		color: tomato;
// 		font-weight: bold;
// 		cursor: pointer;
// 		top: 0;
// 		right: 1rem;
// 		position: absolute;
// 		font-size: 1.5rem;
// 	}
// 	.side-nav {
// 		position: fixed;
// 		width: 25vw;
// 		background-color: #11272c;
// 		height: 100vh;
// 		top: 70px;
// 		left: -100%;
// 		color: red;
// 		transition: all 0.5s ease-in-out;
// 	}

// 	.side-nav-active {
// 		left: 0;
// 		transition: all 0.5s ease-in-out;
// 	}

// 	@media only screen and (max-width: 767px) {
// 		display: block;
// 		.side-nav {
// 			width: 100vw;
// 		}
// 	}
// `;

export default NavbarNew;
