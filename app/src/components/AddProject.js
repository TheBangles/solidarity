import React, { Component } from 'react';

export default class AddProject extends Component {
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
      <div className="container">
        <div className="notification">
          <form onSubmit={this.handleSubmit}>
            {/* Project Name */}
            <div className="field">
              <label className="label">Project Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Text input"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
              </div>
            </div>
            {/* Description */}
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="textarea"
                  type="text"
                  placeholder="Enter description"
                  onChange={this.handleChange}
                  name="description"
                  value={this.state.description}
                />
              </div>
            </div>
            {/* Amount Needed */}
            <div className="field">
              <label className="label">Amount Needed</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Number input"
                  onChange={this.handleChange}
                  name="amountNeeded"
                  value={this.state.amountNeeded}
                />
              </div>
            </div>
            {/* Submit */}
            <div className="field">
              <div className="control">
                <button className="button is-link">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
