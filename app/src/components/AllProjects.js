import React, { Component } from 'react';

export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      projects: [],
    };
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
    this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall();
  }

  async getAllProjects(length, projects) {
    for (let i = 1; i <= length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods
        .readSingleProject(i)
        .call();
      // projects.push(project[2]);
      projects.push(project);
      // console.log(i, project);
      // console.log('projects', projects);
    }
    return projects;
  }

  render() {
    const { drizzle, drizzleState } = this.props;
    const contractState = this.props.drizzleState.contracts.Donate;
    let length;
    let projects = [];
    if (Object.keys(contractState.getAllProjectsLength).length > 0) {
      length = contractState.getAllProjectsLength['0x0'].value;
    }
    if (length > 0) {
      this.getAllProjects(length, projects).then((result) => {
        console.log('final', projects);
        console.log(projects[0][1]);
        return <div>{projects[0][1]}</div>;
      });
    }
    return <div>HELLO</div>;
  }
}
