import React, { Component } from 'react';

export default class Status extends Component {
  constructor(props) {
    super();
    this.state = {
      status: undefined,
    };
  }

  async componentDidMount() {
    const status = await this.props.drizzle.contracts.Donate.methods
      .isCharity()
      .call();
    this.setState({
      status,
    });
  }

  render() {
    return <span>Status: {this.state.status ? 'Charity' : 'Donor'}</span>;
  }
}
