import React, { Component } from 'react';

export default class MetaMask extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <center>
        Please download <a href="https://metamask.io/"> MetaMask </a>  to use Solidarity
        <hr></hr>
        <li> Solidarity is a decentralized app that is built on top of the Ethereum blockchain. </li>
        <li> Donating or creating charity projects require users to submit transactions to the blockchain.</li>
        <li> MetaMask is available as a  browser extension that serves as a crypto wallet. </li>
        <li> It allows you to interact with our application by setting up your own accounts</li>
      </center>
    )
  }
}

