import React, { Component } from 'react';

export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      projects: undefined,
    };
    this.getAllProjects = this.getAllProjects.bind(this);
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
    this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall();
  }

  async componentDidUpdate() {
    const { drizzle, drizzleState } = this.props;
    const contractState = this.props.drizzleState.contracts.Donate;
    let length;
    let projects = [];
    if (Object.keys(contractState.getAllProjectsLength).length > 0) {
      length = contractState.getAllProjectsLength['0x0'].value;
    }

    if (length) {
      const data = await this.getAllProjects(length, projects);
      console.log('BEFORE--data', data);
      console.log('BEFORE--state', this.state.projects);

      if (this.state.projects) console.log('done');
      else {
        this.setState({ projects: data });
        console.log('AFTER--data');
        console.log('AFTER--state', this.state.projects);
      }
    }
  }

  async getAllProjects(length, projects) {
    for (let i = 1; i <= length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods
        .readSingleProject(i)
        .call();
      projects.push(project);
    }
    return projects;
  }

  render() {
    return <div>HELLO</div>;
  }
}
