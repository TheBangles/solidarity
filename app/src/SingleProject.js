import React, { Component } from "react";


export default class SingleProject extends Component {
  constructor (props) {
    super()
  }

  async componentDidMount(){
    //  const singleProject = await this.props.drizzle.contracts.Donate.methods
    //    .readSingleProject(req.params.id)
    //    .call();
  }

  render(){
    return (
      <div>
        <h3>Single Component</h3>
        <p>Placehold projectName</p>
        <p>Placehold description</p>
        <p>Placehold amountNeeded - goal</p>
        <p>Placehold projectName</p>
        <p>Placehold amountDonated</p>
      </div>
    );
  }
}