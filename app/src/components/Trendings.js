import React from 'react';
import { Link } from 'react-router-dom';

export default class Trendings extends React.Component {
  constructor(props, context) {
    super(props);
    this.state= {
      projects: []
    };
  }

  // getAccount(): for Array only
  async componentDidMount() {
    // length = last id of projects, in our contract, id starts at 1.
    const length = await this.props.drizzle.contracts.Donate.methods.nextId().call();

    // Get total number of projects
    const projects = [];
    for (let i = 1; i < length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods.readSingleProject(i).call();
      projects.push(project);
    }

    // Sort:


    this.setState({
      projects: projects
    });
  }

  /*
  project = [0:id, 1:recipient, 2:projectName, 3:description, 4:amountNeeded, 5:amountDonated]
  */

  render() {
    return(
      <div>
        {this.state.projects.map((project) =>
          <div key={project[0]}>
            <Link to={`/single`}>
              <div> Name: {project[2]}</div>
            </Link>
            <Link to={`/single`}>
              <div> Goal: {project[4]}</div>
            </Link>
            <Link to={`/single`}>
              <div> Pecentage Reached: {project[5]/project[4]}% </div>
            </Link>
          </div>
        )}
      </div>
    )
  }

}
