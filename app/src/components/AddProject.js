import React, { Component } from 'react';
import AddProjectForm from './AddProjectForm';
const convert = require('ether-converter');

export default class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      amountNeeded: '',
      imageUrl: '',
      userAddress: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async () => {
    let toast;
    //wei to ether convertion
    // console.log(convert(this.state.amountNeeded, wei));
    let amountNeeded = convert(this.state.amountNeeded, 'ether').wei;

    try {
      await this.props.drizzle.contracts.Donate.methods
        .createProjectStruct(
          this.state.name,
          this.state.description,
          amountNeeded,
          this.state.imageUrl ||
            'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO%20Images%202019/Money/11November/CR-Money-Inlinehero-best-and-worst-charities-1119'
        )
        .send({ from: this.state.userAddress });
      this.setState({
        name: '',
        description: '',
        amountNeeded: '',
        imageUrl: '',
        userAddress: '',
      });
      toast = true;
    } catch (error) {
      toast = false;
      console.log(error);
    }
    return toast;
  };

  render() {
    return (
      <AddProjectForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}
