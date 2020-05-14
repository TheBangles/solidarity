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
      // if (this.state.projects === length) {
      //   console.log('undefined');
      // } else {
      const data = await this.getAllProjects(length, projects);
      console.log('data', data);
      // }

      // if (this.state.projects === length) {
      //   console.log('undefined');
      // } else {
      //   this.getAllProjects(length, projects).then((data) => {
      //     console.log('data', data);
      //     // this.setState({ projects: data });
      //     // console.log('data', data[0][2]);
      //     // this.setState({ projects: [data[0][2]] });
      //     // console.log('state', this.state.projects);
      //   });
      //   console.log(this.state);
      // }
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
