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
      }
    }
  }

  render() {
    if (this.state.isCharity === undefined) return <span />;
    else
      return <span>Status: {this.state.isCharity ? 'Charity' : 'Donor'}</span>;
  }
}
