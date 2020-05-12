import React, { Component } from "react";
// import AllProjects from './AllProjects'

export default class DonateComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: "",
      description: "",
      amountNeeded: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   const { drizzle } = this.props;
  //   // subscribe to changes in the store
  //   this.unsubscribe = drizzle.store.subscribe(() => {
  //     // every time the store updates, grab the state from drizzle
  //     const drizzleState = drizzle.store.getState();
  //     // check to see if it's ready, if so, update local component state
  //     if (drizzleState.drizzleStatus.initialized) {
  //       this.setState({ loading: false, drizzleState });
  //     }
  //   });
  // }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.props.drizzle.contracts)
    try {
      await this.props.drizzle.contracts.Donate.methods
      .createProjectStruct(
        this.state.name,
        this.state.description,
        this.state.amountNeeded
      )
    } catch (error) {
      console.log(error)
    }
    this.state = {
      name: "",
      description: "",
      amountNeeded: ""
    }
  }


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
        <button
          type="submit"
        >
          Add new Project
        </button>
      </div>
    </form>
    {/* <AllProjects /> */}
    </div>
    )
  }
}
