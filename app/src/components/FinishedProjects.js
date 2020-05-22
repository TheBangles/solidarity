import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const convert = require('ether-converter');

export default class FinishedProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      projects: undefined,
    };
    this.getAllProjects = this.getAllProjects.bind(this);
  }

  async componentDidMount() {
    this.props.drizzle.contracts.Donate.methods.getAllProjectsLength.cacheCall();
  }

  async componentDidUpdate() {
    const { drizzle, drizzleState } = this.props;
    const { Donate } = this.props.drizzleState.contracts;
    let length;
    let projects = [];

    if (Object.keys(Donate.getAllProjectsLength).length > 0) {
      length = Donate.getAllProjectsLength['0x0'].value;
    }

    if (length) {
      const data = await this.getAllProjects(length, projects);

      if (!this.state.projects) {
        this.setState({ projects: data });
      }
    }
  }

  async getAllProjects(length, projects) {
    for (let i = 1; i <= length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods
        .readSingleProject(i)
        .call();
      if (project[6] !== true) projects.push(project);
    }
    return projects;
  }

  render() {
    return this.state.projects ? (
      <div className="container">
        {/* <div class="notification"> */}
        <div className="flex-container" id="flex-container">
          {this.state.projects.map((project) => (
            <div className="individual-flex" key={project[0]}>
              <Link to={`/single/${project[0]}`}>
                <h3 className="all-title">{project[2]}</h3>
                <img src={project[7]} height="300" width="300" alt="project" />
                <h3>Goal (ether): {convert(project[4], 'wei').ether}</h3>
                <h3>
                  Contributions (ether): {convert(project[5], 'wei').ether}
                </h3>
              </Link>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    ) : (
      <div>
        <Loader
          type="ThreeDots"
          color="#83C5BE"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    );
  }
}
