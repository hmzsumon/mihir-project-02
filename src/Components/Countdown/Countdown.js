import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
// import gif from "../../images/gif.gif";

const Wrapper = styled.div`
`;

// Set the date we're counting down to
var countDownDate = new Date("November 12, 2021 17:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = 'none';
  }
}, 1000);

const Countdown = () => {
  return (
    <>
      <Wrapper id="countdown" className="wrapper">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={4}>
              <p id="countdown"></p>
            </Col>

          </Row>
        </Container>
      </Wrapper>
      {/* <hr/> */}
    </>
  );
};

export default Countdown;
