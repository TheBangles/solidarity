import React, { Component } from 'react';

export default class SingleProject extends Component {
  constructor(props) {
    super();
    this.state = {
      singleProject: undefined,
    };
  }

  async componentDidMount() {
    const singleProject = await this.props.drizzle.contracts.Donate.methods
      .readSingleProject(4)
      .call();
    this.setState({
      singleProject,
    });
    console.log('singlee', this.state.singleProject);
  }

  render() {
    // const singleProject = this.state.singleProject;
    // if (singleProject === 'undefined') {
    //   return <h1>No project</h1>;
    // }
    // return (
    //   <div>
    //     <h3>{singleProject[2]}</h3>
    //     <p>Description: {singleProject[3]}</p>
    //     <p>Goal: {singleProject[4]}</p>
    //     <p>Amount Donated: {singleProject[5]}</p>
    //   </div>
    // );
    return (
      <div>
        <h3>Name</h3>
        <p>Description</p>
        <p>Goal</p>
        <p>Amount Donated</p>
      </div>
    );
  }
}
