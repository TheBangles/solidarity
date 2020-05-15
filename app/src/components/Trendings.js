import React from 'react';

export default class Trendings extends React.Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state= {
      projects: []
    };
  }

  // getAccount(): for Array only
  async componentDidMount() {
    // length = last id of projects, in our contract, id starts at 1.
    const length = await this.props.drizzle.contracts.Donate.nextId.call();

    // Get total number of projects
    const projects = [];
    for (let i = 1; i <= length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods.readSingleProject(i).call();
      projects.push(project);
    }

    this.setState({
      projects: projects
    });
  }

  /*
  project = [id, recipient, projectName, description, amountNeeded, amountDonated]
  */

  render() {
    return(
      <div>
        {this.state.projects.map((project) =>
          <div key={project[0]}>
            <div>{project[1]}</div>
            <div>{project[2]}</div>
            <div>{project[3]}</div>
            <div>{project[4]}</div>
            <div>{project[5]}</div>
          </div>
        )}
      </div>
    )
  }

}
