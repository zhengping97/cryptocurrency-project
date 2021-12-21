import React, { useState } from 'react'
import './xrpHomePage.css';


function XRPHomePage() {
    const [xrpData, setXRPData] = useState({})
    const [btcData, setBTCData] = useState({})
    const [ethData, setETHData] = useState({})
    const [bnbData, setBNBData] = useState({})
    const [usdtData, setUSDTData] = useState({})
    const [solData, setSOLData] = useState({})
    const [usdcData, setUSDCData] = useState({})
    const [adaData, setADAData] = useState({})

    const fetchCryptoData = () => {
        const searchXRPURL = `https://api.coincap.io/v2/assets/xrp`
        const searchBTCURL = `https://api.coincap.io/v2/assets/bitcoin`
        const searchETHURL = `https://api.coincap.io/v2/assets/ethereum`
        const searchBNBURL = `https://api.coincap.io/v2/assets/binance-coin`
        const searchUSDTURL = `https://api.coincap.io/v2/assets/tether`
        const searchSOLURL = `https://api.coincap.io/v2/assets/solana`
        const searchUSDCURL = `https://api.coincap.io/v2/assets/usd-coin`
        const searchADAURL = `https://api.coincap.io/v2/assets/cardano`
        //(https://api.coincap.io/v2/assets/the-graph)
        //(https://api.coincap.io/v2/assets/hedera-hashgraph)
        //(https://api.coincap.io/v2/assets/the-sandbox)


        fetch(searchXRPURL)
            .then(response => response.json())
            .then(result => {
                setXRPData(result.data)
            })

        fetch(searchBTCURL)
            .then(response => response.json())
            .then(result => {
                setBTCData(result.data)
            })

        fetch(searchETHURL)
            .then(response => response.json())
            .then(result => {
                setETHData(result.data)
            })

        fetch(searchBNBURL)
            .then(response => response.json())
            .then(result => {
                setBNBData(result.data)
            })

        fetch(searchUSDTURL)
            .then(response => response.json())
            .then(result => {
                setUSDTData(result.data)
            })

        fetch(searchSOLURL)
            .then(response => response.json())
            .then(result => {
                setSOLData(result.data)
            })

        fetch(searchUSDCURL)
            .then(response => response.json())
            .then(result => {
                setUSDCData(result.data)
            })

        fetch(searchADAURL)
            .then(response => response.json())
            .then(result => {
                setADAData(result.data)
            })
    }

    return (
        <div class="App-theme">
            {fetchCryptoData()}
            <div class="position-relative text-center">

                <div class="row align-items-start border-bottom mb-5">
                    <div class="col">
                        <h1 class="display-1 fw-bolder">{xrpData.symbol}</h1>
                        <h3 class="fst-italic">Price (usd): ${parseFloat(xrpData.priceUsd).toFixed(3)}</h3>
                    </div>

                    <div class="col">
                        {parseFloat(xrpData.changePercent24Hr) > 0 ?
                            <h3 class="display-3 fw-bolder mt-5 text-success">+{parseFloat(xrpData.changePercent24Hr).toFixed(2)}%</h3> :
                            <h3 class="display-3 fw-bolder mt-5 text-danger">{parseFloat(xrpData.changePercent24Hr).toFixed(2)}%</h3>
                        }

                    </div>
                </div>

                <h5>Rank: {xrpData.rank}</h5>
                <h5>Supply: {parseInt(xrpData.supply)}</h5>
                <h5 class="mb-5">Market Cap: {parseFloat(xrpData.marketCapUsd).toFixed(2)}</h5>

                <h1 class="mt-5 border-bottom">Expected Price Level</h1>

                <table class="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Expected Price ($)</th>
                            <th scope="col">Change Percent (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{btcData.name}</th>
                            <td>{btcData.rank}</td>
                            <td>${(parseFloat(btcData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(btcData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)}%</td>
                        </tr>

                        <tr>
                            <th scope="row">{ethData.name}</th>
                            <td>{ethData.rank}</td>
                            <td>${(parseFloat(ethData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(ethData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)}%</td>
                        </tr>

                        <tr>
                            <th scope="row">{bnbData.name}</th>
                            <td>{bnbData.rank}</td>
                            <td>${(parseFloat(bnbData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(bnbData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)}%</td>
                        </tr>

                        <tr>
                            <th scope="row">{usdtData.name}</th>
                            <td>{usdtData.rank}</td>
                            <td>${(parseFloat(usdtData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(usdtData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)
                            }%</td>
                        </tr>

                        <tr>
                            <th scope="row">{solData.name}</th>
                            <td>{solData.rank}</td>
                            <td>${(parseFloat(solData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(solData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)
                            }%</td>
                        </tr>

                        <tr>
                            <th scope="row">{adaData.name}</th>
                            <td>{adaData.rank}</td>
                            <td>${(parseFloat(adaData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(adaData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)
                            }%</td>
                        </tr>

                        <tr>
                            <th scope="row">{usdcData.name}</th>
                            <td>{usdcData.rank}</td>
                            <td>${(parseFloat(usdcData.marketCapUsd) / parseFloat(xrpData.supply)).toFixed(3)}</td>
                            <td>{
                                (((parseFloat(usdcData.marketCapUsd) / parseFloat(xrpData.supply)) - parseFloat(xrpData.priceUsd)) /
                                    (parseFloat(xrpData.priceUsd)) * 100).toFixed(2)
                            }%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default XRPHomePage