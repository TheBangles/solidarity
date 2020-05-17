import Web3 from 'web3';
import Donate from './contracts/Donate.json';
import Migrations from './contracts/Migrations.json';

const options = {
  web3: {
    block: false,
    // customProvider: new Web3(window.web3.currentProvider),
  },

  contracts: [Migrations, Donate],
};

export default options;
