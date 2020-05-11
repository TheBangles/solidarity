import Web3 from "web3";
import ComplexStorage from "./contracts/ComplexStorage.json";
import SimpleStorage from "./contracts/SimpleStorage.json";
import TutorialToken from "./contracts/TutorialToken.json";
import Donate from './contracts/Donate.json'
import Migrations from './contracts/Migrations.json'

const options = {
  web3: {
    block: false,
    // customProvider: new Web3("ws://localhost:7545"),
    customProvider: new Web3(window.web3.currentProvider),
  },
  // contracts: [SimpleStorage, ComplexStorage, TutorialToken, Donate],
  contracts: [SimpleStorage, Migrations, Donate],
  // events: {
  //   SimpleStorage: ["StorageSet"],
  // },
};

export default options;

