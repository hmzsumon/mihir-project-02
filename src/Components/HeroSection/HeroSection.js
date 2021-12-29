/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { useState } from 'react';
import Web3 from 'web3';
import { bullsABI } from '../../ABI/bulls';
import { useWeb3React } from '@web3-react/core';
import icon from '../../images/icon.png';
import sloth from '../../images/gif2.gif';
import logo from '../../images/slsl-logo.png';
import WalletButton from '../WalletConnect/WalletConnect';
import HowItWorks from '../HowItWork/HowItWorks';
import BgImg from '../../images02/bg_siteintro.png';
import TopImg from '../../images/hero_img01.png';

const Wrapper = styled.div`
	.heroTop {
		background-image: url(${BgImg});
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		height: 50vh;
		/* position: relative; */
		/* overflow: hidden; */
	}
	.heroTop img {
		width: 50%;
		margin: 50px auto;
	}
	.heroContent {
		margin-top: 200px;

		color: #11272c;
	}
	width: 100vw;
	// text-transform: uppercase;
	padding: 60px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #11272c;
	box-sizing: border-box;
	.link-dark {
		color: black;
	}
	.hero-div img {
		max-width: 300px;
	}
	.headsloth {
		border-radius: 35px;
	}
	.title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #11272c;
	}
	.subtitle {
		font-size: 30px;
		text-transform: none;
		color: #11272c;
	}
	.hero-footer {
		/* background: red;
		width: 100vw; */
		/* border-radius: 100px; */
		color: #11272c;
		text-align: center;
		padding: 12px 0 30px;
		max-width: 1000px;
		margin: 0 auto;
	}
	.hero-footer p {
		font-size: 20px;
	}
	.hero-footer h4 {
		font-weight: 700;
	}
	.borders {
		border: 5px solid #000;
		padding: 4px 15px;
	}
	.borders-left {
		border: 5px solid #000;
		border-right: 0;
		cursor: pointer;
		padding: 4px 15px;
	}
	.borders-right {
		border: 5px solid #000;
		border-left: 0;
		cursor: pointer;
		padding: 4px 15px;
	}
	.icon img {
		width: 100px;
	}
	.button,
	.wallet_button,
	#dropdown {
		background: #11272c;

		border: 0;
		outline: 0;
		color: #fff;
		padding: 10px 25px 15px;
		border-radius: 50px;
		font-family: 'arco', sans-serif;
		font-weight: 700;
		font-size: 35px;
	}
	.hero-footer.claim {
		max-width: 1000px;
		margin-top: 40px;
		padding: 20px 15px 40px;
	}
	#dropdown {
		margin-right: 20px;
	}
	.wallet_button {
		margin: 0 20px;
		// width: 250px;
		text-overflow: ellipsis;
		overflow: hidden;
		text-transform: uppercase;
	}
	.italic {
		font-style: italic;
	}
	.mint-it {
		display: flex;
	}
	img.logo-mobile {
		margin: 0 auto 20px;
		width: 30%;
	}
	a {
		color: #11272c;
	}
	@media only screen and (max-width: 991px) {
		padding: 0px 10px;
		.icon img {
			width: 60px;
		}
		.hero-footer {
			border-radius: 30px;
			padding: 15px;
		}
		.hero-footer h4 {
			font-size: 30px;
		}
		.borders {
			padding: 4px 4px;
		}
		.borders-left {
			padding: 8px 4px;
		}
		.borders-right {
			padding: 8px 4px;
		}
		.buttons {
			// display:flex;
		}
		.button,
		.wallet_button {
			// font-size:12px;
			// padding:12px 10px;
		}
	}
	@media only screen and (max-width: 767px) {
		.hero-div img {
			display: block;
			margin: 0 auto;
			max-width: 340px;
		}
		.hero-div img.logo-mobile {
			display: block;
			margin: 0 auto 20px;
		}
	}
`;

const HeroSection = () => {
	const [bull_num, setNum] = useState('Connect wallet to view total');
	const [mint, setMint] = useState(1);
	const [successfulPurchase, setsuccessfulPurchase] = useState(false);
	const [rewardSuccessfulPurchase, setRewardSuccessfulPurchase] =
		useState(false);
	const [accountConnected, setAccountConnected] = useState(false);
	const [hasError, setHasError] = useState('');
	const [rewardHasError, setRewardHasError] = useState('');
	const [transactionHash, setTransactionHash] = useState('');
	const [rewardTransactionHash, setRewardTransactionHash] = useState('');
	const [amount, setAmount] = useState('160000000000000000');
	const [price, setPrice] = useState('0.18');
	const [share, setShare] = useState('Connect wallet to view total rewards in');
	const { account, library } = useWeb3React();

	useEffect(async () => {
		const web3 = new Web3(Web3.givenProvider);
		const bullcontract = new web3.eth.Contract(
			bullsABI,
			'0x74a1a77b627714bf7200464a16c51701abb7cc38'
		);
		bullcontract.methods
			.totalSupply()
			.call()
			.then((resp) => {
				// console.log('resp',resp)
				setNum(resp);
			})
			// })
			.catch(function (error) {
				setNum('Connect wallet to view total');
			});
	}, []);

	function handleChange(event) {
		setMint(event.target.value);
	}

	const web3 = new Web3(Web3.givenProvider);
	const bullcontract = new web3.eth.Contract(
		bullsABI,
		'0x74a1a77b627714bf7200464a16c51701abb7cc38'
	);

	bullcontract.methods
		.aData()
		.call({ from: account })
		.then((resp) => {
			// console.log('resp',resp)
			const string = resp[1].toString();
			const amount = web3.utils.fromWei(string, 'ether');
			setShare(amount);
		})
		.catch(function (error) {
			setShare('Connect wallet to view total rewards in');
		});

	bullcontract.methods
		.totalSupply()
		.call()
		.then((resp) => {
			// console.log('resp',resp)
			setNum(resp);
		})
		// })
		.catch(function (error) {
			setNum('Connect wallet to view total');
		});

	const mintNFT = async () => {
		setHasError('');
		setRewardHasError('');
		if (account) {
			setAccountConnected(true);
			const web3 = new Web3(library.provider);
			const bullcontract = new web3.eth.Contract(
				bullsABI,
				'0x74a1a77b627714bf7200464a16c51701abb7cc38'
			);
			const amount = web3.utils.toWei('0.18', 'ether');
			bullcontract.methods
				.mint(mint)
				.send({ from: account, value: amount * mint })
				.on('receipt', function (receipt) {
					setAccountConnected(true);
					setsuccessfulPurchase(true);
					setTransactionHash(receipt.transactionHash);
					setHasError('');
				})
				.on('error', function (error) {
					setHasError(error.message); // transaction rejected
					setsuccessfulPurchase(false);
				});
		} else {
			setAccountConnected(false);
		}
	};

	const reward = async () => {
		setRewardHasError('');
		setHasError('');
		if (account) {
			setAccountConnected(true);
			const web3 = new Web3(library.provider);
			const bullcontract = new web3.eth.Contract(
				bullsABI,
				'0x74a1a77b627714bf7200464a16c51701abb7cc38'
			);
			bullcontract.methods
				.claimMintRewards()
				.send({ from: account })
				.on('receipt', function (receipt) {
					setAccountConnected(true);
					setRewardSuccessfulPurchase(true);
					setRewardTransactionHash(receipt.transactionHash);
					setRewardHasError('');
				})
				.on('error', function (error) {
					setRewardHasError(error.message); // transaction rejected
					setRewardSuccessfulPurchase(false);
				});
		} else {
			setAccountConnected(false);
		}
	};

	const handleIncrement = () => {
		setMint(mint + 1);
	};

	const handleDecrement = () => {
		setMint(mint - 1);
	};

	return (
		<>
			<Wrapper id='buyasloth' className='wrapper'>
				<Container fluid>
					<Row className='heroTop mb-5'>
						<img src={TopImg} alt='logo' className='topImg' />
					</Row>
					{/* <Row className='heroContent'>
						<Col md={3} lg={3} xl={3} sm={12} xs={12} className='mx-auto'>
							<div className='hero-div my-2 my-2'>
								<img src={sloth} alt='sloth' className='headsloth' />
							</div>
						</Col>
						<Col md={8} lg={8} xl={8} xs={12} className='middeling'>
							<div className='hero-text'>
								<h4 className='title'>HANG WITH THE SLOTHS!</h4>
								<p className='subtitle py-3'>
									The Sluggish Sloths are a collection of 9,999 hand crafted
									sloths found hanging around on the Binance Smart Chain. <br />
									Adopting a Sluggish Sloth grants you access to The Rain Forest
									and the fight to save their home!
								</p>
							</div>
						</Col>
					</Row> */}

					{/* <HowItWorks /> */}

					<div className='hero-footer'>
						<h4 className='title mb-2 mt-5'>
							MINT A SLOTH <br />
						</h4>
						<p className=''>
							You're just one transaction away from hangin’ with the sloths.
						</p>
						<br />
						<p>Total minted Sloths: {bull_num}</p>
						<p>Mint Price: {price} BEP-20 BNB</p>
						{/* <WalletButton /> */}
						<Row className='middeling'>
							{/* <Col md={12} lg={12}>
                <h1 className="py-3 py-lg-3">SOLD OUT</h1>
              </Col> */}
							{/* <Col md={8} lg={6}>
                MARKETPLACE FOR Sluggish Sloths: <a target="_blank" href="https://nftkey.app/collections/sluggishsloths/" className="link">NFTKey</a>
              </Col> */}
							<Col md={5} lg={9} className=''>
								<Row className='mint-it'>
									<Col className='px-2 pt-4'>
										<MintCountContainer className='flex'>
											<p>How many Toby's?</p>
											<button onClick={handleDecrement} disabled={mint === 0}>
												-
											</button>
											<input
												type='text'
												value={mint}
												onChange={(e) => setMint(e.target.value)}
											/>
											<button onClick={handleIncrement}>+</button>
											<div>
												<p onClick={mintNFT}>Mint</p>
											</div>
										</MintCountContainer>
									</Col>
								</Row>
							</Col>
							<p className='mt-4 mb-2 small-font'>
								Recommended: Metamask & MetaMask in-app browser
								<br /> or WalletConnect w/ TrustWallet.
							</p>
						</Row>
						{hasError ? <p>{hasError}</p> : ''}
						{successfulPurchase ? (
							<p>
								Success!{' '}
								<a
									className='link-dark'
									href={`https://www.bscscan.com/tx/${transactionHash}`}
									target='_blank'
								>
									Click to view your transaction.
								</a>
							</p>
						) : (
							''
						)}
					</div>

					<div className='hero-footer claim'>
						<h4 className='title'>CLAIM REWARD</h4>
						<p className='py-2'>
							Claim your rewards for holding, patient as a sloth.
						</p>
						<Row className='middeling'>
							<Col md={5} lg={9} className=''>
								<Row className='mint-it'>
									<Col className='px-2'>
										<p>Your Rewards: {share} BNB</p>
										<p className='small-font'>
											Note: we recommended you wait roughly 100 mints after your
											sloth # to claim rewards.
										</p>
										<button className='button mt-4' onClick={reward}>
											Claim Rewards
										</button>
									</Col>
								</Row>
							</Col>
						</Row>
						{rewardHasError ? <p className='mt-2'>{rewardHasError}</p> : ''}
						{rewardSuccessfulPurchase ? (
							<p>
								Success!{' '}
								<a
									className='link-dark'
									href={`https://www.bscscan.com/tx/${transactionHash}`}
									target='_blank'
								>
									Click to view your transaction.
								</a>
							</p>
						) : (
							''
						)}
					</div>

					{/* <h1 className="py-5 text-center">
            TRADE ON <a target="_blank" href="https://nftkey.app/collections/sluggishsloths/" className="link">NFTKey</a>
          </h1> */}
					<h4 className='py-5 text-center'>
						<a
							className='link'
							href='https://bscscan.com/token/0x74a1a77b627714bf7200464a16c51701abb7cc38'
							target='_blank'
						>
							VERIFIED SMART CONTRACT
						</a>
					</h4>
				</Container>
			</Wrapper>
		</>
	);
};

const MintCountContainer = styled.div`
	padding: 2rem;
	border-radius: 0.5rem;
	background-color: #6891ed;
	display: flex;
	justify-content: center;
	gap: 1rem;
	align-items: center;
	margin: 0 auto;

	button {
		background-color: transparent;
		border: none;
		padding: 0.5rm 0.7rem;
		border-radius: 5px;
		font-size: 3rem;
		font-weight: bold;
		color: #fff;
	}

	input {
		width: 50px;
		height: 50px;
		border-radius: 50%;

		text-align: center;
		border: none;
		border-bottom: 1px solid #00a8ff;
		font-size: 1.2rem;
		font-weight: bold;
	}
	div {
		padding: 0.5rem 1rem;
		background-color: #11272c;

		border-radius: 1rem;
	}
	p {
		font-size: 1.2rem;
		font-weight: bold;
		color: #fff;
		cursor: pointer;
	}
`;

export default HeroSection;
