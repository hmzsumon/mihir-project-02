import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Wrapper = styled.div`
	padding: 120px 100px;
	color: 'var(--text-color)';
	.r-title {
		text-transform: uppercase;
		font-size: 40px;
		color: var(--text-color);
		font-family: 'brln', sans-serif;
		font-weight: 700;
	}
	.r-subtitle {
		padding-bottom: 60px !important;
		color: var(--text-color) !important;
	}
	.percent {
		width: 100%;

		padding: 15px 20px;
		background: var(--main-color);
		border-radius: 8px;
		color: #fff;
		font-family: 'brln', sans-serif;
		height: 0;
		padding-top: 50%;
		padding-bottom: 50%;
	}
	.r-text-container {
		display: flex;
	}
	.percent-container {
		wight: 70px;
		height: 70px;
	}
	.r-text {
		color: var(--text-color);
		width: 70%;
		padding-top: 11px;
		padding-left: 20px;
		font-family: 'brln', sans-serif;
	}
	@media only screen and (max-width: 991px) {
		padding: 120px 10px;
		.r-text-container {
			margin: 10px;
		}

		.r-text {
			padding: 0 10px;
		}
	}
	@media only screen and (max-width: 767px) {
		padding: 120px 50px;
		.r-text {
			width: 90%;
			padding: 0 10px;
		}
	}
	@media only screen and (max-width: 520px) {
		padding: 120px 10px;
		.r-text {
			width: 90%;
			padding: 0 10px;
		}
	}
	@media only screen and (max-width: 435px) {
		padding: 120px 10px;
		.r-text {
			width: 90%;
			padding: 0 10px;
		}
	}
`;

const RoadMap = () => {
	const roadmapArray = [
		{
			text: 'There will be a five-bull random airdrop for early adopters. We will begin pushing our social media marketing as well as banner advertisements to promote the Bulls.',
			percent: '10%',
		},
		{
			text: 'We will be on the hunt for a marketplace partnership as well as $3,000 dropping into the community wallet. The community of the Bulls will decide how the $3,000 is spent. This could include the likes of giveaways, donations, advertisements and more.',
			percent: '25%',
		},
		{
			text: 'A $3,000 donation decided by the community of the Bulls on how it’s spent as well as a $2,000 BNB giveaway.',
			percent: '50%',
		},

		{
			text: 'Exclusive Bull merch will be released, such as T-shirts, hoodies, and so much more!',
			percent: '75%',
		},
		{
			text: 'Introduction of the Bull Lottery as well as a custom reflections BNB marketplace.',
			percent: '90%',
		},
		{
			text: '$10,000 donation dropped into the community wallet. The community of the Bulls will decide how it will be spent. It could be spent on giveaways, donations, advertisements and more. Let your imaginations run wild.',
			percent: '100%',
		},
	];
	return (
		<>
			<Wrapper id='roadmap' className='wrapper'>
				<Container fluid>
					<h3 className='r-title'>Roadmap</h3>
					<br />
					<p className=' r-subtitle'>
						Once we have hit the precentage of mints outlined below we will
						begin working on our ultimate goal. More on that as the time
						nears...
					</p>
					<Col>
						<div className='row'>
							{roadmapArray.map((el, i) => {
								return (
									<div key={i} className='r-text-container my-2'>
										<div className='my-2 percent-box'>
											<div className='middeling percent'>{el.percent}</div>
										</div>
										<div className='r-text '>{el.text}</div>
									</div>
								);
							})}
						</div>
					</Col>
				</Container>
			</Wrapper>
			{/* <hr/> */}
		</>
	);
};

export default RoadMap;
