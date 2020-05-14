import React, { Component } from "react";


export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      name: "",
      description: ""
    }
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
    console.log(this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall());
  }



  render() {
    const { drizzle, drizzleState } = this.props;
    const contractState = this.props.drizzleState.contracts.Donate;
    let mapArray = [];

    if (contractState.getAllProjectsLength[1]) {
      mapArray = contractState.getAllProjectsLength[1].value;
    console.log(mapArray)
    }
    return (
      <div>
        HELLO WORLD
      </div>
    )
  }

}
