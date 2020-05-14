import React,{Component} from 'react';
import MetaMaskLoginButton from 'react-metamask-login-button';

export default class Login extends Component {
  constructor() {
    super();
 }
  render() {
    return (
      <div>
        <MetaMaskLoginButton />
      </div>
    );
  }
}

