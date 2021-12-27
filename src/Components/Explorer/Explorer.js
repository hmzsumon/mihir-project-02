import React from 'react';
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { bullsABI } from "../../ABI/bulls";
import Web3 from 'web3';

const Wrapper = styled.div`
  padding: 120px 100px;

  color: var(--text-color);
  .h-section {
      padding-bottom: 20px;
  }
  .h-title {
    font-size: 25px;
    font-weight: 700;
    color: #fff;
    padding-bottom: 35px !important;
    font-family: "brln", sans-serif;
  }
  .image-section {
      
  }
  .h-image {

  }
  .h-image img {
    border-radius: 5px;
    width: 100%;
  }
  .bullimag {
      padding-bottom : 20px;
      border-style : solid;
      border-color : #0f1316;
      margin-bottom : 10px;
  }
  .transferButton {
    display: inline-block;
    padding: 8px 20px;
    font-size: 20px;
    font-family: "brln", sans-serif;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: var(--blue);
    border: none;
    border-radius: 8px;
    width : 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .bull-trait {
    font-size: 20px;
    font-family: "brln" !important;
    width: 80%;
    padding: 10px 10px;
    color: var(--blue);
    background: #121827;
    border: 1px solid var(--blue);
    border-radius: 10px;
  }
  .bull-id {
    ::placeholder {
        color: var(--blue);
    }
    font-size: 20px;
    font-family: "brln" !important;
    width: 80%;
    padding: 10px 10px;
    color: var(--blue);
    background: #121827;
    border: 1px solid var(--blue);
    border-radius: 10px;
  }
  .bull-filter {
    font-size: 20px;
    font-family: "brln" !important;
    width: 80%;
    padding: 10px 10px;
    color: var(--blue);
    background: #121827;
    border: 1px solid var(--blue);
    border-radius: 10px;
  }
  p {
    font-size: 20px;
    color: #fff;
    text-align: center;
  }
  
  .wallet_button:hover {background-color: #c38e0d}

  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
  }
  @media only screen and (max-width: 767px) {
    padding-top: 80px;
    .bull-trait {
        width: 100%;
    }
    .bull-id {
        width: 100%;
    }
    .bull-filter {
        width: 100%;
    }
  }
  @media only screen and (max-width: 435px) {
    padding: 0 10px;
    padding-top: 120px;
    .wallet_button {
        width: 100%;
    }
    .bull-trait {
        width: 100%;
    }
    .bull-id {
        width: 100%;
    }
    .bull-filter {
        width: 100%;
    }
  }
`;

const Caps = styled.span`
    text-transform: capitalize;
`

const Loader = styled.div`
    border-radius: 50%;
    width: 10em;
    height: 10em;
    margin: 60px auto;
    font-size: 10px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load8 1.1s infinite linear;
    animation: load8 1.1s infinite linear;
    overflow: hidden;

    &::after {
            border-radius: 50%;
    width: 10em;
    height: 10em;
    }

    @-webkit-keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes load8 {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }
    `

export default class Explorer extends React.Component {
    constructor() {
        super()

        this.state = {
            bullsPurchased: [],
            error: '',
            isLoading: true,
            background: "",
            base: "",
            clothing: "",
            eyes: "",
            hat: "",
            mouth: "",
            prop: "",
            bullId: 0,
            num: 0,
        }
        this.loadBlockChain()
    }

    async loadBlockChain() {
        const newBulls = await this.getBulls()
        this.setState({ bullsPurchased: newBulls })
    }
    
    async getBulls() {
        const nb = []
        const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');
        const bullcontract = new web3.eth.Contract(bullsABI, "0xe2496fb8b54ebe11b485508ca9536822cb607e6b");
        var num1 = await bullcontract.methods.totalSupply().call()
        this.setState({num: num1});
        for (var i = num1-1; i >= num1-25; i--) {
            await fetch(`https://api.allorigins.win/raw?url=https://www.sluggishsloths.app/api/${i}`)
                .then((response) => {
                    // console.log(response, 'response')
                    if (response.ok) return response.json();
                    throw new Error("Network response was not ok.");
                })
                .then(function (data) {
                    // console.log(data, 'data')
                    const bull = {
                        tokenId: data.tokenId,
                        name: data.name,
                        image: data.image,
                    };
                    data.attributes.forEach((attribute) => {
                        bull[attribute.trait_type] = attribute.value;
                    });
                    nb.push(bull)
                    console.log(data);
                })
                .catch(error => {
                    // console.log(error, 'in error')
                    this.setState({ error })
                })
                .finally(() => {
                    // console.log('in finally')
                    this.setState({ isLoading: false })
                })
        }
        return nb
    }
    
    onResetFilter = () => {
        document.getElementById('background').value = "none";
        document.getElementById('base').value = "none";
        document.getElementById('clothing').value = "none";
        document.getElementById('eyes').value = "none";
        document.getElementById('hat').value = "none";
        document.getElementById('mouth').value = "none";
        document.getElementById('prop').value = "none";
    }

    handleBackground = (value) => {
        this.setState({background: value});
    }
    handleBase = (value) => {
        this.setState({base: value});
    }
    handleClothing = (value) => {
        this.setState({clothing: value});
    }
    handleEyes = (value) => {
        this.setState({eyes: value});
    }
    handleHat = (value) => {
        this.setState({hat: value});
    }
    handleMouth = (value) => {
        this.setState({mouth: value});
    }
    handleProp = (value) => {
        this.setState({prop: value});
    }
    handleByID = (value) => {
        this.setState({bullId: value});
    }

    render() {

        return (
            <Wrapper id="howitworks">
                <Container fluid>
                    <Row className="">
                        {this.state.isLoading ?
                            <Col md={12} className="h-section">
                                <Loader>Loading...</Loader>
                            </Col>
                            :
                            <>
                                <Col md={12} className="h-section">
                                    <h3 className="h-title text-center">
                                        25 recently minted sloths
                                    </h3>
                                </Col>
                                {/* <Col md={3} className = "image-section">
                                    <div className="custom-select">
                                        <select className = "bull-trait" id = "background" onChange = {(e) => {this.handleBackground(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Background</option>
                                            <option value="Binance Yellow">Binance Yellow</option>
                                            <option value="Pancake Swap">Pancake Swap</option>
                                            <option value="Mint Green">Mint Green</option>
                                            <option value="Punk Blue">Punk Blue</option>
                                            <option value="Army Green">Army Green</option>
                                            <option value="Mint Green">Mint Green</option>
                                            <option value="Land Rover">Land Rover</option>
                                            <option value="Aqua Blue">Aqua Blue</option>
                                        </select>
                                    </div>
                                    <div className="custom-select" >
                                        <select className = "bull-trait" id = "base" onChange = {(e) => {this.handleBase(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Base</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Yellow">Yellow</option>
                                        </select>
                                    </div>
                                    <div className="custom-select">
                                        <select className = "bull-trait" id = "clothing" onChange = {(e) => {this.handleClothing(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Clothing</option>
                                            <option value="King Robe">King Robe</option>
                                            <option value="Hawaiian">Hawaiian</option>
                                            <option value="Jumpsuit">Jumpsuit</option>
                                            <option value="Flower Shirt">Flower Shirt</option>
                                            <option value="Leather Jacket">Leather Jacket</option>
                                            <option value="Suspenders">Suspenders</option>
                                            <option value="Holes Gray">Holes Gray</option>
                                            <option value="T-Shirt Gray">T-Shirt Gray</option>
                                            <option value="Turtle-Neck Gray">Turtle-Neck Gray</option>
                                            <option value="Lab Coat">Lab Coat</option>
                                            <option value="Cutoff">Cutoff</option>
                                            <option value="Cutoff 2">Cutoff 2</option>
                                            <option value="Skeleton">Skeleton</option>
                                            <option value="Army Jacket">Army Jacket</option>
                                            <option value="Black Suit">Black Suit</option>
                                        </select>
                                    </div>
                                    <div className="custom-select">
                                        <select className = "bull-trait" id = "eyes" onChange = {(e) => {this.handleEyes(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Eyes</option>
                                            <option value="Wide Eyes">Wide Eyes</option>
                                            <option value="Blindfold">Blindfold</option>
                                            <option value="Angry Eyes">Angry Eyes</option>
                                            <option value="Stoned">Stoned</option>
                                            <option value="Crying">Crying</option>
                                            <option value="3D Glasses">3D Glasses</option>
                                            <option value="Normal">Normal</option>
                                            <option value="Sunglasses">Sunglasses</option>
                                        </select>
                                    </div>
                                    <div className="custom-select" >
                                        <select className = "bull-trait" id = "hat" onChange = {(e) => {this.handleHat(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Hat</option>
                                            <option value="Binance Hat">Binance Hat</option>
                                            <option value="Fisher Hat">Fisher Hat</option>
                                            <option value="Farmer Hat">Farmer Hat</option>
                                            <option value="No Hat">No Hat</option>
                                            <option value="Bandana Red">Bandana Red</option>
                                            <option value="Bowler">Bowler</option>
                                            <option value="Kings Crown">Kings Crown</option>
                                            <option value="Halo">Halo</option>
                                            <option value="Snapback Green">Snapback Green</option>
                                            <option value="Beanie Gray">Beanie Gray</option>
                                            <option value="Captains Hat">Captains Hat</option>
                                            <option value="Cowboy Hat">Cowboy Hat</option>
                                            <option value="Party Hat 1">Party Hat 1</option>
                                            <option value="Party Hat 2">Party Hat 2</option>
                                        </select>
                                    </div>
                                    <div className="custom-select">
                                        <select className = "bull-trait" id = "mouth" onChange = {(e) => {this.handleMouth(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Mouth</option>
                                            <option value="Grr">Grr</option>
                                            <option value="Tongue Out">Tongue Out</option>
                                            <option value="Cigar">Cigar</option>
                                            <option value="Straight">Straight Face</option>
                                            <option value="Gold Grill">Gold Grill</option>
                                            <option value="Wah">Wah</option>
                                            <option value="Party">Party</option>
                                            <option value="Pipe">Pipe</option>
                                            <option value="Cig">Cig</option>
                                            <option value="Cheerful">Cheerful</option>
                                            <option value="OOO">OOO</option>
                                            <option value="Grin">Grin</option>
                                            <option value="Rainbow Grill">Rainbow Grill</option>
                                            <option value="Bubblegum">Bubblegum</option>
                                            <option value="Dumbfounded">Dumbfounded</option>
                                        </select>
                                    </div>
                                    <div className="custom-select">
                                        <select className = "bull-trait" id = "prop" onChange = {(e) => {this.handleProp(e.target.value)}}>
                                            <option value="none" selected disabled hidden>Prop</option>
                                            <option value="Binance Chain">Binance Chain</option>
                                            <option value="Blue Beams">Blue Beams</option>
                                            <option value="None">None</option>
                                            <option value="Nose Ring">Nose Ring</option>
                                        </select>
                                    </div>
                                    <div className = "">
                                        <input type = "text" className = "bull-id" id = "byid" placeholder = "By Id" onChange = {(e) => {this.handleByID(e.target.value)}}/>
                                    </div>
                                    <br/>
                                    <div className = "">
                                        <button type = "button" className = "bull-filter" onClick = {this.onResetFilter}>Reset filters</button>
                                    </div>
                                    <br/>
                                </Col> */}
                                <Col md={12}>
                                    <div className="h-image">
                                        <Row>
                                            {this.state.bullsPurchased.map((bull) => {
                                                return (
                                                    <Col className="bullimag p-3" md={3} sm={12} key={bull.tokenId}>
                                                        <img id={bull.name} src={bull.image} alt="" />
                                                        {Object.keys(bull).map(key => {
                                                            if (bull[key] === bull.image || bull[key] === bull.tokenId) return
                                                            if (bull[key] === bull.name) {
                                                                return <p><Caps>SLOTH</Caps> {bull[key]}</p>
                                                            }
                                                            return (
                                                                <p><Caps>{key}</Caps>: {bull[key]}</p>
                                                            )
                                                        })}
                                                    </Col>
                                                );
                                            })}
                                        </Row>
                                    </div>
                                </Col>
                            </>
                        }
                    </Row>
                </Container>
            </Wrapper>
        )
    }
}
