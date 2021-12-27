import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
// import gif from "../../images/gif.gif";

const Wrapper = styled.div`
	padding: 50px 100px;
	text-align: center;
	color: #11272c !important;

	.h-title {
		text-transform: uppercase;
		font-size: 40px;
		font-weight: 700;
		color: #fff;
		padding-bottom: 35px !important;
		font-family: 'brln', sans-serif;
	}
	.h-image img {
		border-radius: 5px;
		width: 100%;
	}
	.top {
		font-family: 'arco', 'arco2', sans-serif !important;
		font-size: 65px;
		color: #11272c;
	}
	.bottom {
		font-family: 'arco', 'arco2', sans-serif !important;
		font-size: 26px;
	}
	@media only screen and (max-width: 991px) {
		// padding: 120px 10px;
	}
	@media only screen and (max-width: 767px) {
		padding: 0 0 50px;
	}
	@media only screen and (max-width: 520px) {
		// padding: 120px 10px;
	}
	@media only screen and (max-width: 435px) {
		// padding: 120px 10px;
	}
`;

const HowItWorks = () => {
	return (
		<>
			<Wrapper id='howitworks' className='wrapper'>
				<Container fluid>
					<Row className='align-items-center'>
						<Col md={4}>
							<div className='stats-container'>
								<p className='top'>9,999</p>
								<p className='bottom'>to be minted</p>
							</div>
						</Col>
						<Col md={4}>
							<div className='stats-container'>
								<p className='top'>100+</p>
								<p className='bottom'>unique attributes</p>
							</div>
						</Col>
						<Col md={4}>
							<div className='stats-container'>
								<p className='top'>4</p>
								<p className='bottom'>rare bases</p>
							</div>
						</Col>
					</Row>
				</Container>
			</Wrapper>
			{/* <hr/> */}
		</>
	);
};

export default HowItWorks;
