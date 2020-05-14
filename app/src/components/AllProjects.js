import React, { Component } from "react";


export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      projects: []
    }
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
    this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall();
  }

  async getAllProjects(length) {
    for (let i = 1; i < length+1; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods.readSingleProject(i).call()
      this.setState({
        projects: project
      })
    }
  }

  render() {
    const { drizzle, drizzleState } = this.props;
    const contractState = this.props.drizzleState.contracts.Donate;
    let mapArray = [];

    if (contractState.getAllProjectsLength['0x0']) {
      mapArray = contractState.getAllProjectsLength['0x0'].value;
    }
    let length = mapArray
    console.log(length)

    // console.log(this.getAllProjects(length))
    console.log(this.state.projects)
    return (
      <div>
        HELLO
      </div>
    )
  }

}
