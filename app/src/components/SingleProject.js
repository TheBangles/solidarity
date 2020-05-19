import React, { Component } from 'react';
import SingleProjectForm from './SingleProjectForm';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
const convert = require("ether-converter");

export default class SingleProject extends Component {
  constructor(props) {
    super();
    this.state = {
      singleProject: undefined,
      amount: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    let id = this.props.history.location.pathname.slice(8);
    const singleProject = await this.props.drizzle.contracts.Donate.methods
      .readSingleProject(id)
      .call();
    this.setState({
      singleProject,
    });
  }

  handleChange = (event) => {
    this.setState({
      // update amount donated
      amount: event.target.value,
    });
  };

  // handleSubmit = async (event) => {
  //   event.preventDefault();
  handleSubmit = async () => {
    let id = this.props.history.location.pathname.slice(8);
    let toast;

    let amountDonated = convert(this.state.amount, "ether").wei;

    try {
      await this.props.drizzle.contracts.Donate.methods.donate(id).send({
        value: amountDonated,
      });
      this.setState({
        amount: 0,
      });
      toast = true;
    } catch (error) {
      toast = false;
      console.log(error);
    }
    return toast;
  };

  render() {
    // let singleProject = this.state.singleProject || 'not mounted';
    if (!this.state.singleProject) {
      return(
        <Loader
           type="ThreeDots"
           color="#83C5BE"
           height={100}
           width={100}
           timeout={3000} //3 secs
        />
       );
    }
      return (
      <SingleProjectForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        state={this.state}
      />
    );
  }
}
