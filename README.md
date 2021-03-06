# Solidarity

Solidarity is a charity donation platform that uses the Ethereum blockchain for efficient and transparent donations.

Charities can create a campaign that patrons can donate to, and they receive the funds once their goal is met. Smart contract rules prevent charities from misappropriating funds.

Check out our demo [here](https://solidarity-demo.herokuapp.com/).

## Installation

1. Install [Ganache](https://www.trufflesuite.com/docs/ganache/quickstart) to create a personal development blockchain and test accounts.

2. Install [Metamask](https://metamask.io/) and link Metamask with Ganache by following instructions in Step 3 of [this blog](https://medium.com/@adamh90/creating-a-local-test-environment-for-ethereum-smart-contracts-1f638efca020).

3. Fork/clone this repo and run the following commands in your terminal. This app uses the [Drizzle Box](https://www.trufflesuite.com/boxes/drizzle) as a template.
 
```bash
npm install -g truffle
truffle unbox drizzle
# don't forget to install other dependencies in root and app directory

# compiles and migrates smart contracts; changes to the smart contract must be manualy recompiled and migrated
truffle compile
truffle migrate --reset

# Ensure your port in truffle-config.js is set to 7545 (Ganache network)

# run react app; 
cd app
npm run start
```

## Tech Stack
Within the Ethereum blockchain, we use Solidity to write a smart contract, which Truffle then migrates to our personal blockchain in Ganache. Metamask is the gateway that allows us to interact with our dapp and update Ganache. Within our app, React is rendering our data, while Drizzle updates our data if there are new blocks added.

- Ethereum - Decentralized, open source, and distributed computing platform that allows creation of smart contracts and dapps 
- Solidity - Object-oriented language for implementing smart contracts
- Web3.js - Allows you to interact with local/remote ethereum node using HTTP/IPC connection 
- Metamask - Chrome extension that connects to remote Ethereum nodes and read user wallets
- Ganache - Personal Ethereum blockchain
- Truffle - Ethereum dev testing framework
- Drizzle - Collection of front-end libraries based on a Redux store
- React.js - Dynamically render front-end

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
