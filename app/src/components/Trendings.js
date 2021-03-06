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
    // length = last id of projects, in our contract, nextId starts at 1 and we increment nextId each time we create a project
    const length = await this.props.drizzle.contracts.Donate.methods.nextId().call();

    // Get total number of projects
    const projects = [];
    for (let i = 1; i < length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods.readSingleProject(i).call();
      projects.push(project);
    }

    // Sort:
    projects.sort((first, second) => {
      const firstPercent = first[5]/first[4];
      const secondPercent = second[5]/second[4];

      if (firstPercent > secondPercent) {
        return -1;
      } else {
        return 1;
      }
    });

    this.setState({
      projects: projects.slice(0, 6)
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
              <div> Goal: {project[4]}</div>
              <div> Pecentage Reached: {project[5]/project[4]}% </div>
            </Link>
          </div>
        )}
      </div>
    )
  }

}
