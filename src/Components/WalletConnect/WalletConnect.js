import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core'
import { ConnectorId, useWalletModal } from '@pantherswap-libs/uikit'
import { injected, bsc, walletconnect } from '../../connectors'
import Web3 from "web3";

const WalletConnect = () => {
    const { account, activate, deactivate } = useWeb3React()
    const web3 = new Web3(Web3.givenProvider);

    useEffect(async () => {
        signIn()
    }, [])


    async function signIn() {
        window.ethereum.enable()
            .then(function (accounts) {
                web3.eth.getChainId().then((chainId) => {
                    // console.log('chainId', chainId);
                    if (chainId != 56) { // 97 testnet
                        alert("You are on the wrong network. Change network to Binance Smart Chain.");
                    } else {
                        let wallet = accounts[0]
                        // console.log('wallet', wallet);
                        handleLogin(wallet)
                    }
                });
            })
    }

    const handleLogin = (connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
            return activate(walletconnect)
        }
        else if (connectorId === 'bsc') {
            return activate(bsc)
        }
        return activate(injected)
    }

    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account)

    const { onPresentAccountModal } = useWalletModal(handleLogin, deactivate, account)

    return (
        !account ? <button type="button" className="wallet_button not-connected" onClick={onPresentConnectModal}>Connect Wallet</button>
            : <button type="button" className="wallet_button connected" onClick={onPresentAccountModal}>Wallet Connected</button>
    )
}

export default WalletConnect