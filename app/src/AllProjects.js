import React, { Component } from "react";


export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      name: "",
      description: "",

    }
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
    console.log(this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall());

  }

  render () {
    console.log(this.state)

    const { drizzle, drizzleState } = this.props;
    const contractState = this.props.drizzleState.contracts.Donate;
    let mapArray = [];

    if (contractState.getAllProjectsLength['0x0']) {
      mapArray = contractState.getAllProjectsLength['0x0'].value;
    }
    console.log(contractState.getAllProjectsLength)

    return (
      <div>
        HELLO WORLD
      </div>
    )
  }

}
