import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import dopey from '../../images/dopey.jpeg';
import bogo from '../../images/bogo.jpeg';
import terpy from '../../images/terpy.jpeg';
import vibe from '../../images/vibe.jpeg';

const Wrapper = styled.div`
  padding: 100px 100px;
  color: #11272c;

  .t-title {
    text-transform: uppercase;
    font-size:40px ;
    font-weight:700;
    font-family: "brln", sans-serif;
    text-align: center;
    margin-bottom: 25px !important;
  }

  .person {
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 700;
    font-family: "arco", "arco2", sans-serif !important;
    background: #00000070;
    padding: 5px 10px 10px 10px!important;
  }

  .style2 {
    margin-bottom: 20px;

    img {
      width: 100%;
      display: block;
      background: #00000070;
      padding: 0 10px;
    }
  }
/*
  .box img{
    width: 120px;
    border-radius:8px;
  }
  .team-text{
      font-size:25px;
      margin-left:15px !important;
      font-family: "brln", sans-serif;
      font-weight:700;
  }
  .position{
    font-size:14px;
    font-family: "brln", sans-serif;
    font-weight:500;
  } */

}
@media only screen and (max-width: 991px) {
  // padding: 120px 10px;
}
@media only screen and (max-width: 767px) {
  // padding: 120px 50px;
}
@media only screen and (max-width: 520px) {
  // padding: 120px 10px;

  /* .box {
    width: 120px;
    border-radius:8px;
    background: var(--main-color);
  }
  .team-text{
    font-size:15px;
  }
  .position{
    font-size:11px;
  }
  .style1 {
    flex: 100%;
    padding-bottom: 20px;
  } */
  .style2 {
    flex: 100%;
  }
}
@media only screen and (max-width: 435px) {
  padding: 50px 10px;
  /* .box {
    width: 120px;
    border-radius:8px;
    background: var(--main-color);
  }
  .team-text{
    font-size:15px;
  }
  .position{
    font-size:11px;
  }
  .style1 {
    flex: 100%;
    padding-bottom: 20px;
  } */
  .style2 {
    flex: 100%;
  }
}
`;

const Team = () => {
	return (
		<Wrapper id='team' className='wrapper'>
			<Container fluid>
				<h3 className='t-title'>The Team</h3>
				<Row className='py-4'>
					<Col xs='6' sm='3' className='style2'>
						<p className='person'>DOPEY</p>
						<img src={dopey} alt='' />
						<p className='person'>CREATOR</p>
					</Col>
					<Col xs='6' sm='3' className='style2'>
						<p className='person'>DP</p>
						<img src={bogo} alt='' />
						<p className='person'>DEVELOPER</p>
					</Col>
					<Col xs='6' sm='3' className='style2'>
						<p className='person'>VIBE</p>
						<img src={vibe} alt='' />
						<p className='person'>MANAGER</p>
					</Col>
					<Col xs='6' sm='3' className='style2'>
						<p className='person'>TERPY</p>
						<img src={terpy} alt='' />
						<p className='person'>SUPPORT</p>
					</Col>
				</Row>
			</Container>
		</Wrapper>
	);
};

export default Team;
