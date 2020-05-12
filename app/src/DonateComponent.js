import React, { Component } from "react";

export default class DonateComponent extends Component {
  constructor (props) {
    super (props);
    this.state = {
      charityName: "",
      imageUrl: "",
      description: "",
      goal: "",
    }
  }

  componentDidMount() {
   this.fetchData();
  }

  fetchData() {
    const
  }

  render() {
    return (
      <div>
        {this.state.balance}
      </div>
    )
  }

}
