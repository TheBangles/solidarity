import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
    // component and its parent component rerenders a few times - not sure why
    const { drizzle, drizzleState } = this.props;
    const { Donate } = this.props.drizzleState.contracts;
    let length;
    let projects = [];

    // Donate.getAllProjectsLength only has keys (e.g. ['0x0']) after the third re-render. comment back console.log below to find out:
    // console.log('Donate.getAllProjects.Length', Donate.getAllProjectsLength);
    if (Object.keys(Donate.getAllProjectsLength).length > 0) {
      length = Donate.getAllProjectsLength['0x0'].value;
    }

    // length is defined only after third re-render
    if (length) {
      const data = await this.getAllProjects(length, projects);
      // console.log('BEFORE STATE UPDATED', this.state.projects);

      // stop updating state if this.state.projects is defined/updated with ^^^data^^^
      if (!this.state.projects) {
        this.setState({ projects: data });
        // console.log('AFTER STATE UPDATED', this.state.projects);
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
    return this.state.projects ? (
      this.state.projects.map((project) => (
        <div key={project[0]}>
          <Link to={`/single/${project[0]}`}>
            <h1>Project # {project[0]}</h1>
            <h3>Name: {project[2]}</h3>
            <h3>Description: {project[3]}</h3>
            <h3>Amount Needed: {project[4]}</h3>
            <h3>Amount Donated: {project[5]}</h3>
          </Link>
        </div>
      ))
    ) : (
      <div>Loading...</div>
    );
  }
}