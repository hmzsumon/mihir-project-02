import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from './Sidebar';
import { Link } from 'react-scroll';
import { useWeb3React } from '@web3-react/core';
import WalletButton from '../WalletConnect/WalletConnect';
import logo from '../../images/slsl-logo.png';
import twitter from '../../images/twitter.png';
import telegram from '../../images/telegram.png';
import social from '../../images/social.png';

// import "./style.css";

const Wrapper = styled.div`
	width: 100%;
	left: 0;
	top: 0;
	background-color: red;

	.logo-connect {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.navbars {
		padding: 0 80px;
	}
	.logo {
		color: var(--text-color);
		font-size: 65px;
	}
	a {
		text-decoration: none;
		text-transform: uppercase;
	}
	.menu-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.menu-container a,
	.menu-container p {
		color: var(--text-color);
		text-decoration: none;
		font-size: 25px;
		font-family: 'brln', sans-serif;
		padding: 10px 12px;
	}
	.hamburger {
		display: none;
		cursor: pointer;
	}
	.wallet_button {
		text-transform: uppercase;
		display: inline-block;
		padding: 15px 20px;
		font-family: 'brln', sans-serif;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		outline: none;
		color: #fff;
		background-color: var(--blue);
		border: none;
		border-radius: 8px;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-left: 12px;
	}

	.wallet_button:hover {
		background-color: #6891ed;
	}

	@media only screen and (max-width: 991px) {
		.wallet_button {
			margin-left: 0;
		}
		.navbars {
			padding: 0 50px;
		}
		.logo {
			font-size: 50px;
		}

		.menu-container a,
		.menu-container p {
			font-size: 16px;
			padding: 10px 10px;
			font-style: italic;
		}
	}
	@media only screen and (max-width: 953px) {
		.menu-container a,
		.menu-container p {
			font-size: 15px;
			padding: 10px 5px;
		}
	}
	@media only screen and (max-width: 767px) {
		.navbars {
			padding: 0 30px;
		}
		.menu-container {
			display: none;
		}
		.hamburger {
			display: block;
		}
	}
`;

const Navbar = (props) => {
	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => {
		setSidebar((prev) => !prev);
	};

	const menuItem = [
		{
			text: 'My collection',
			url: 'mycollection',
			ischecked: false,
		},
		{
			text: 'Market (Coming soon)',
			url: '',
			ischecked: false,
		},
		// {
		//   text: "How It Works",
		//   url: "howitworks",
		//   ischecked: false,
		// },
		// {
		//   text: "Roadmap",
		//   url: "roadmap",
		//   ischecked: false,
		// },
		// {
		//   text: "Team",
		//   url: "team",
		//   ischecked: false,
		// },
		{
			text: 'Connect',
			url: 'connect',
			ischecked: true,
		},
	];

	const { account } = useWeb3React();

	return (
		<Wrapper className=''>
			<div className='py-3'>
				<Row>
					<Col
						// xs={6}
						// md={10}
						className=''
					>
						<div className='logo-connect'>
							<img src={logo} alt='logo' width='380px' className='mb-2' />
						</div>
						<div className='menu-container'>
							<Link to='/'>
								<NavLink to='/'>homepage</NavLink>
							</Link>
							<Link to='mycollection'>
								<NavLink to='/mycollection'>my collection</NavLink>
							</Link>
							<div className='logo-connect my-2'>
								<WalletButton />
							</div>
							{/* <Link to="bullsexplorer">
                <NavLink to="/explorer">recently minted</NavLink>
              </Link> */}
							<p>MARKET (Coming Soon)</p>
							<a
								target='_blank'
								href='https://medium.com/@sluggishslothsnft/the-sluggish-sloths-115b6c42a09f'
								rel='noreferrer'
							>
								Roadmap
							</a>
							<div className='social-container'>
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
							</div>
						</div>
						<GiHamburgerMenu
							className='hamburger'
							size='30'
							color='var(--text-color)'
							onClick={showSidebar}
						/>
					</Col>
				</Row>
				{sidebar && <Sidebar menuItem={menuItem} showSidebar={showSidebar} />}
			</div>
		</Wrapper>
	);
};

export default Navbar;
