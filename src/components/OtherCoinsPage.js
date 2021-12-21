
import { useState } from 'react'
import './xrpHomePage.css';

function OtherCoinsPage() {
    const [xrpData, setXRPData] = useState({})
    const [grtData, setGRTData] = useState({})
    const [hbarData, setHBARData] = useState({})
    const [sandData, setSANDData] = useState({})


    const fetchCryptoData = () => {
        const searchXRPURL = `https://api.coincap.io/v2/assets/xrp`
        const searchGRTURL = `https://api.coincap.io/v2/assets/the-graph`
        const searchHBARURL = `https://api.coincap.io/v2/assets/hedera-hashgraph`
        const searchSANDURL = `https://api.coincap.io/v2/assets/the-sandbox`

        fetch(searchXRPURL)
            .then(response => response.json())
            .then(result => {
                setXRPData(result.data)
            })

        fetch(searchGRTURL)
            .then(response => response.json())
            .then(result => {
                setGRTData(result.data)
            })

        fetch(searchHBARURL)
            .then(response => response.json())
            .then(result => {
                setHBARData(result.data)
            })

        fetch(searchSANDURL)
            .then(response => response.json())
            .then(result => {
                setSANDData(result.data)
            })
    }

    return (
        <div class="App-theme">
            {fetchCryptoData()}
            <div class="row mb-5 p-lg-5 mx-auto border border-secondary">
                <div class="col text-center">
                    <h1 class="display-4 fw-normal">{grtData.name}</h1>
                    <p class="lead fw-normal"><u>{grtData.symbol}</u></p>
                    <p class="lead">Rank: {grtData.rank}th</p>
                </div>

                <div class="col">

                    <p class="fw-normal">Price: ${parseFloat(grtData.priceUsd).toFixed(2)}
                        {parseFloat(grtData.changePercent24Hr) > 0 ?
                            <p class="text-success">+{parseFloat(grtData.changePercent24Hr).toFixed(2)}%</p> :
                            <p class="text-danger">{parseFloat(grtData.changePercent24Hr).toFixed(2)}% </p>}
                    </p>

                    <p class="fw-normal">Supply: {parseInt(grtData.supply)}</p>
                    <p class="fw-normal">Market Cap: {parseFloat(grtData.marketCapUsd).toFixed(2)}</p>
                    <p class="fw-normal">Expected Price: ${(parseFloat(xrpData.marketCapUsd) / parseFloat(grtData.supply)).toFixed(3)}
                        <p class="text-success">+{(((parseFloat(xrpData.marketCapUsd) / parseFloat(grtData.supply)) - parseFloat(grtData.priceUsd)) /
                            (parseFloat(grtData.priceUsd)) * 100).toFixed(2)}%
                        </p>
                    </p>
                </div>
            </div>


            <div class="row mb-5 p-lg-5 mx-auto border border-secondary">
                <div class="col text-center">
                    <h1 class="display-4 fw-normal">{hbarData.name}</h1>
                    <p class="lead fw-normal"><u>{hbarData.symbol}</u></p>
                    <p class="lead">Rank: {hbarData.rank}th</p>
                </div>

                <div class="col">

                    <p class="fw-normal">Price: ${parseFloat(hbarData.priceUsd).toFixed(2)}
                        {parseFloat(hbarData.changePercent24Hr) > 0 ?
                            <p class="text-success">+{parseFloat(hbarData.changePercent24Hr).toFixed(2)}%</p> :
                            <p class="text-danger">{parseFloat(hbarData.changePercent24Hr).toFixed(2)}% </p>}
                    </p>

                    <p class="fw-normal">Supply: {parseInt(hbarData.supply)}</p>
                    <p class="fw-normal">Market Cap: {parseFloat(hbarData.marketCapUsd).toFixed(2)}</p>
                    <p class="fw-normal">Expected Price: ${(parseFloat(xrpData.marketCapUsd) / parseFloat(hbarData.supply)).toFixed(3)}
                        <p class="text-success">+{(((parseFloat(xrpData.marketCapUsd) / parseFloat(hbarData.supply)) - parseFloat(hbarData.priceUsd)) /
                            (parseFloat(hbarData.priceUsd)) * 100).toFixed(2)}%
                        </p>
                    </p>
                </div>
            </div>


            <div class="row mb-5 p-lg-5 mx-auto border border-secondary">
                <div class="col text-center">
                    <h1 class="display-4 fw-normal">{sandData.name}</h1>
                    <p class="lead fw-normal"><u>{sandData.symbol}</u></p>
                    <p class="lead">Rank: {sandData.rank}th</p>
                </div>

                <div class="col">

                    <p class="fw-normal">Price: ${parseFloat(sandData.priceUsd).toFixed(2)}
                        {parseFloat(sandData.changePercent24Hr) > 0 ?
                            <p class="text-success">+{parseFloat(sandData.changePercent24Hr).toFixed(2)}%</p> :
                            <p class="text-danger">{parseFloat(sandData.changePercent24Hr).toFixed(2)}% </p>}
                    </p>

                    <p class="fw-normal">Supply: {parseInt(sandData.supply)}</p>
                    <p class="fw-normal">Market Cap: {parseFloat(sandData.marketCapUsd).toFixed(2)}</p>
                    <p class="fw-normal">Expected Price: ${(parseFloat(xrpData.marketCapUsd) / parseFloat(sandData.supply)).toFixed(3)}
                        <p class="text-success">+{(((parseFloat(xrpData.marketCapUsd) / parseFloat(sandData.supply)) - parseFloat(sandData.priceUsd)) /
                            (parseFloat(sandData.priceUsd)) * 100).toFixed(2)}%
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OtherCoinsPage