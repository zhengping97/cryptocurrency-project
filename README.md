# XRP Live Tracker https://xrp-live-tracker.vercel.app/
The cryptocurrency-app (XRP Live Tracker) is a web application build with reactjs that was design to monitor some of the crypto coins on my watchlist. The crypto coins data were fetched from https://docs.coincap.io/. CoinCap is a useful tool for real-time pricing and market activity for over 1,000 cryptocurrencies and no API key is required. Following are resources used to build the application:

##### 1. Nodejs: https://nodejs.org/
##### 2. Visual Studio Code: https://code.visualstudio.com/
##### 3. BootStrap: https://getbootstrap.com/
##### 4. List of public APIs: https://github.com/public-apis/public-apis

Besides displaying the Crypto data retrieved from the CoinCap API, I used the data of the other coins that currently ranks above XRP which are Bitcoin, Ethereum, Binance Coin, Tether, Solana, Cardano, USD Coin in ranking order as of 21 Dec 2021, to calculate the expected price of XRP with the market cap as these coins. Furthermore, I added 3 other potential coins, theGraph, Hedera Hashgraph and the Sandbox, and uses the market cap of XRP to calculate their expected price.

Disclaimer: The expected prices are calculated based on other crypto coins market cap and their supply, the website is for observation only and does not involved in giving any professional advice.

Screenshots of the XRP Live Tracker application:
<img width="950" alt="XRPHomePage" src="https://user-images.githubusercontent.com/36413759/146900266-b0f98fe3-3cda-40a5-9316-cba9cba89b25.PNG">
<img width="950" alt="OtherCoinsPage" src="https://user-images.githubusercontent.com/36413759/146900278-56d122a5-a66b-4e34-a7b9-7faf1578708b.PNG">

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
