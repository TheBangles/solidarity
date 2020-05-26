import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
const convert = require('ether-converter');

export default class AllProjects extends Component {
  constructor(props, context) {
    super(props);
    this.drizzleState = context.drizzle;
    this.state = {
      projects: undefined,
      totalPage: [],
      size: 10,
      currentPage: 0,
    };
    this.getAllProjects = this.getAllProjects.bind(this);
  }

  async componentDidMount() {
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
        this.pagination();
      }
    }

  }

  async getAllProjects(length, projects) {
    for (let i = 1; i <= length; i++) {
      let project = await this.props.drizzle.contracts.Donate.methods
        .readSingleProject(i)
        .call();
      if (project[6] === true) projects.push(project);
    }
    return projects.reverse();
  }

  pagination() {
    if (this.state.projects) {
      const totalPage = [];

      for (let i = 0; i < this.state.projects.length; i++) {
        const page = Math.floor(i / this.state.size);

        if (!totalPage[page]) {
          totalPage[page] = [];
        }

        totalPage[page].push(this.state.projects[i]);
      }

      this.setState({
        totalPage: totalPage,
      });
    }
  }

  changePage(page) {
    if (page >= 0 && page < this.state.totalPage.length) {
      this.setState({
        currentPage: page
      });

      this.pagination();
    }
  }

  render() {
    return this.state.totalPage && this.state.totalPage[this.state.currentPage] ? (
      <div className="container">
        {/* <div class="notification"> */}
        <div className="flex-container" id="flex-container">
          {this.state.totalPage[this.state.currentPage].map((project) => (
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
        <div>
          {
            this.state.totalPage &&
            <div style={{textAlign: "center", margin: "20px"}}>
              <div>Page {this.state.currentPage + 1}</div>
              <button onClick={this.changePage.bind(this, this.state.currentPage - 1)} style={{fontSize: "15px"}}>&lt;</button>
              {
                this.state.totalPage.map((page, index) => (
                  <button onClick={this.changePage.bind(this, index)} style={{fontSize: "15px"}}> {index + 1}</button>
                ))
              }
              <button onClick={this.changePage.bind(this, this.state.currentPage + 1)} style={{fontSize: "15px"}}>&gt;</button>
            </div>
          }
        </div>
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
