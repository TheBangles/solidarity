# Solidarity

Solidarity is a charity donation platform that uses the Ethereum blockchain for efficient and transparent donations.

Charities can create a campaign that patrons can donate to, and they receive the funds once their goal is met. Smart contract rules prevent charities from misappropriating funds.

## Installation

1. Install [Ganache](https://www.trufflesuite.com/docs/ganache/quickstart) to create a personal development blockchain and test accounts.

2. Fork/clone this repo and run the following commands in your terminal. This app uses the [Drizzle Box](https://www.trufflesuite.com/boxes/drizzle) as a template.
 
```bash
npm install -g truffle
truffle unbox drizzle
# don't forget to install other dependencies in root and app directory

# compiles and migrates smart contracts
truffle compile
truffle migrate --reset
# smart contract changes must be manually recompiled and migrated.

# Ensure your port in truffle-config.js is set to 7545 (Ganache network)

# run react app; 
cd app
npm run start
```

3. Install [Metamask](https://metamask.io/) to create a personal development blockchain and test accounts.

4. Link Metamask with Ganache following the instructions in [Step 3 - Set up MetaMask with your Ganache chain](https://medium.com/@adamh90/creating-a-local-test-environment-for-ethereum-smart-contracts-1f638efca020).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

