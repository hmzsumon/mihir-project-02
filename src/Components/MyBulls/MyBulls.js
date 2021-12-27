import { useEffect, useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { bullsABI } from "../../ABI/bulls";
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core'
import WalletButton from "../WalletConnect/WalletConnect"

const Wrapper = styled.div`
  padding: 30px 0;

  color: var(--text-color);
  .h-section {
      padding-bottom: 40px;
      font-family: "brln" !important;
  }

  .h-title {
    font-size: 40px;
    text-transform: uppercase;
    font-weight:700;
    letter-spacing: 2px;
}

.sub-title {
    text-transform: uppercase;
    font-weight:700;
    font-family: "arco", "arco2", sans-serif !important;
  }

  .h-image img {
    width: 100%;
  }
  .slothimage {
    margin-bottom: 10px;
    padding: 10px;
    background: #00000070;
  }

  p {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-family: "brln", sans-serif !important;
  }

  .sloth-title {
    font-family: "arco", "arco2", sans-serif !important;
  }

  .sloth-descriptor {
    padding: 0 10px !important;
  }

  .wallet_button {
    text-transform: uppercase;
    display: inline-block;
    padding: 15px 20px;
    font-family: "brln", sans-serif;
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

  .wallet_button:hover {background-color: #6891ed}

  .transferButton {
    display: block;
    padding: 5px 10px;
    font-size: 20px;
    font-family: "brln", sans-serif;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: var(--blue);
    border: none;
    border-radius: 10px;
    width : 46%;
    margin: 4% auto;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .mobile-only {
    display: none;
  }
  @media only screen and (max-width: 991px) {
    padding: 0px 10px;
    .wallet_button {
        margin-left: 0;
        margin-bottom: 30px;
    }
  }
  @media only screen and (max-width: 767px) {
    padding-top: 80px;
    .mobile-only {
        display: block;
    }
  }
  @media only screen and (max-width: 435px) {
    padding: 0 10px;
    padding-top: 120px;
    .wallet_button {
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

    const TransferModal = styled(Modal)`
            .modal-content {
                background-color: #121827;
                border-radius: 30px;
            }
        `;

const MyBulls = () => {
    const { account, library } = useWeb3React()
    const [bullsPurchased, setBullsPurchased] = useState([]);
    const [mintedMessage, setMintedMessage] = useState('Connect to your wallet to see your collection of sloths.');
    const [show, setShow] = useState(false);
    const [transferAddress, setTransferAddress] = useState("");
    const [bullId, setBullId] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError]= useState('');

    const collectionNFT = async () => {
        const nb = []
        if (account) {
            let num = null
            const web3 = new Web3(library.provider);
            const bullcontract = new web3.eth.Contract(bullsABI, "0x74a1a77b627714bf7200464a16c51701abb7cc38");
            try {
                num = await bullcontract.methods.tokensOfOwner(account).call();
            } catch (e) {
                // return this.setState({ isLoading: false, error: `Please connect to the correct wallet.`})
                setIsLoading(false);
                setError(`Please connect to the correct wallet.`);
            }

            if (typeof num !== Number && !num) {
                setError("Something went wrong. Please try again, and ensure you are connected to the right network.")
                setIsLoading(false);
                return
                // i made this an else if, rather then starting a new if statement, is that right?
            } else if (num && num.length === 0) {
                setMintedMessage("Go purchase a sloth to view it here!");
                setIsLoading(false);
            } else if (num && num.length === 1) {
                setMintedMessage("You have minted 1 Sloth.")
                setIsLoading(false);
            } else {
                setMintedMessage(`You have minted ${num.length} Sloths.`)
                setIsLoading(false);
            };

            for (var i = 0; i < num.length; i++) {
                await fetch(`https://www.sluggishsloths.app/api/${num[i]}`) 
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
                    })
                    .catch(error => {
                        // console.log(error, 'in error')
                        // this.setState({ error })
                    })
                    .finally(() => {
                        // console.log('in finally')
                        setIsLoading(false);
                    })
            }
        }

        nb.sort(function(a, b) { return a.tokenId - b.tokenId})
        setBullsPurchased(nb);
        return nb
    }

    useEffect(async () => {
        await collectionNFT();
    }, [account]);

    const handleShow = async () => {
        if(transferAddress) {
            const web3 = new Web3(library.provider)
            const accounts = await web3.eth.getAccounts()
            const bullcontract = new web3.eth.Contract(bullsABI, "0x74a1a77b627714bf7200464a16c51701abb7cc38");
            bullcontract.methods.safeTransferFrom(account, transferAddress, bullId)
                .send({ from: account, to: transferAddress});
        }
    }

    const transferBull = async (id) => {
        await setShow(true);
        setBullId(id);
    }

    const handleClose = () => {
        setShow(false);
        handleShow();
    }

    const handleClose1 = () => {
        setShow(false);
    }

    const handleChange = (e) => {
        setTransferAddress(e.target.value);
    }

    const saveBull = async (imageSrc, imageName) => {
        const image = await fetch(imageSrc)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        const link = document.createElement('a')
        link.href = imageURL
        link.download = "SLOTH" + imageName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    if (!account) {
        return <Wrapper id="howitworks">
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={12} className="h-section">
                        <div className="mobile-only"><WalletButton /></div>
                        <p id="sub-title">It seems you're not connected to the correct blockchain. <br/>
                        Connect your wallet to access The Rainforest.</p>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    }

    if (error) {
        return <Wrapper id="howitworks">
            <Container fluid>
                <Row className="align-items-center">
                    <Col md={12} className="h-section">
                        <p id="sub-title">{error}</p>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    }

    return(
        <>
        <Wrapper id="howitworks">
            <Container fluid>
                <Row className="align-items-center">
                    {isLoading ?
                        <Col md={12} className="h-section">
                            <Loader>Loading...</Loader>
                        </Col>
                        :
                        <>
                        <Col md={12} className = "h-section">
                            <h3 className="h-title text-center">My Sloths</h3>
                            <p className="sub-title">{mintedMessage}</p>
                        </Col>
                        <Col md={12}>
                            <div className="h-image">
                                <Row>
                                    {bullsPurchased.map((bull) => {
                                        return (
                                            <Col className="slothimage" md={3} sm={12} key={bull.tokenId}>

                                                <img id={bull.name} src={bull.image} alt="" />
                                                {Object.keys(bull).map(key => {
                                                    if (bull[key] === bull.image || bull[key] === bull.tokenId) return
                                                    if (bull[key] === bull.name) {
                                                        return <p className="sloth-title"><Caps>SLOTH</Caps> {bull[key]}</p>
                                                    }
                                                    return (
                                                        <p className="sloth-descriptor"><Caps>{key}</Caps>: {bull[key]}</p>
                                                    )
                                                })}
                                                {/* <button type = "button" className = "transferButton" onClick = {() => saveBull(bull.image, bull.name)}>Save</button> */}
                                                {/* <button type = "button" className = "transferButton" onClick = {() => transferBull(bull.tokenId)}>Transfer</button> */}
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </div>
                        </Col>
                    </>
                    }
                </Row>
                <TransferModal className = "transferModal" show={show} onHide = {handleClose1}>
                    <Modal.Header closeButton>
                        <Modal.Title style = {{ color : "#6891ed", fontFamily: "brln" }}>Input Address</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type = "text" value = { transferAddress } style = {{width: "100%", fontFamily: "brln", color: "#6891ed", background: "#2d2f37"}} onChange = { handleChange } />
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" style = {{fontFamily: "brln", color: "#6891ed", background: "#2d2f37"}} onClick={handleClose}>
                        Transfer
                    </Button>
                    </Modal.Footer>
                </TransferModal>
            </Container>
        </Wrapper>
        </>
    )
}

export default MyBulls;
