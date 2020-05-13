import React, { Component } from 'react';
// import AllProjects from './AllProjects'

export default class DonateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      amountNeeded: '',
      userAddress: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (!this.state.userAddress) {
      const accounts = await this.props.drizzle.web3.eth.getAccounts();
      this.setState({ userAddress: accounts[0] });
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(this.props.drizzle.store.getState());
    try {
      await this.props.drizzle.contracts.Donate.methods
        .createProjectStruct(
          this.state.name,
          this.state.description,
          this.state.amountNeeded
        )
        .send({ from: this.state.userAddress });
      this.setState({
        name: '',
        description: '',
        amountNeeded: '',
        userAddress: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">
              <small>Project Name</small>
            </label>
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="description">
              <small>Description</small>
            </label>
            <textarea
              onChange={this.handleChange}
              name="description"
              rows="5"
              cols="50"
              value={this.state.description}
            />
          </div>
          <div>
            <label htmlFor="amountNeeded">
              <small>Amount Needed</small>
            </label>
            <input
              onChange={this.handleChange}
              name="amountNeeded"
              type="number"
              value={this.state.amountNeeded}
            />
          </div>
          <div>
            <button type="submit">Add new Project</button>
          </div>
        </form>
        {/* <AllProjects /> */}
      </div>
    );
  }
}
