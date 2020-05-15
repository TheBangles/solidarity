import React, { Component } from 'react';

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
    let id = this.props.history.location.pathname.slice(8)
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

  handleSubmit = async (event) => {
    let id = this.props.history.location.pathname.slice(8)
    event.preventDefault();
    try {
      await this.props.drizzle.contracts.Donate.methods.donate(id).send({
        value: this.state.amount,
      });
      this.setState({
        amount: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    let singleProject = this.state.singleProject || 'not mounted';
    return (
      <div>
        <h3>Project: {singleProject[2]}</h3>
        <p>Description: {singleProject[3]}</p>
        <p>Goal: {singleProject[4]}</p>
        <p>Amount Donated: {singleProject[5]}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="amount">
            <small>Amount</small>
          </label>
          <input
            onChange={this.handleChange}
            name="amount"
            type="number"
            value={this.state.amount}
          />
          <input type="submit" value="Donate" />
        </form>
      </div>
    );
  }
}
