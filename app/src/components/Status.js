import React, { Component } from 'react';

export default class Status extends Component {
  constructor(props) {
    super();
    this.state = {
      isCharity: undefined,
    };
  }

  async componentDidMount() {
    const { drizzle } = this.props;
    let state = await drizzle.store.getState();
    const dataKey = await drizzle.contracts.Donate.methods.isCharity.cacheCall();

    this.setState({
      isCharity: undefined,
    });
  }

  async componentDidUpdate() {
    const { drizzle } = await this.props;
    let state = await drizzle.store.getState();
    if (state.contracts.Donate.isCharity['0x0']) {
      let isCharity = state.contracts.Donate.isCharity['0x0'].value;
      if (isCharity !== this.state.isCharity) {
        this.setState({
          isCharity,
        });
        console.log(this.state.isCharity);
      }
    }
  }

  render() {
    return (
      <span>Logged in as: {this.state.isCharity ? 'Charity' : 'Donor'}</span>
    );
  }
}
