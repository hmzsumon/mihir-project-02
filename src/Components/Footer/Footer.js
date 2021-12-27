import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import twitter from "../../images/twitter.png";
import telegram from "../../images/telegram.png";
import social from "../../images/social.png";
import logo from "../../images/icon.png";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  border-radius: 100px;
  background: var(--main-color);
  color: #fff;
  padding: 20px 0;
  font-family: "brln", sans-serif;
  margin-bottom: 30px;
  max-width: 1000px;
  .social-container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .social-container img {
    width: 40px;
  }
  .soocial-container p {
    font-weight: 700;
  }
  .footer-links {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .footer-links img {
    width: 60px;
  }
  .footer-links a {
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Footer = () => {
  return (
    <Wrapper id="footer" className="wrapper">
      <Container>
        <Row className="middeling">
          <Col md={8}>
            <div className="social-container">
              <a href = "https://discord.gg/A6BVKccSvY" target = "_blank" rel="noreferrer"><img src={social} alt="#" /></a>
              <a href = "https://t.me/SluggishSloths" target = "_blank" rel="noreferrer"><img src={telegram} alt="#" /></a>
              <a href = "https://twitter.com/SluggishSloths" target = "_blank" rel="noreferrer"><img src={twitter} alt="#" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Footer;
