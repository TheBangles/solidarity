import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
// import Login from './components/Login'
// import history from './history';
// import Homepage from './components/Homepage';
import CreateProject from './components/createProject'

export default class Routes extends Component {

  render() {
    return (
      <Router >
        <Switch>
          {/* <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} /> */}
          <Route exact path ='/donate' component={CreateProject} drizzle={this.props.drizzle} drizzleState={this.props.drizzleState}/>
        </Switch>
      </Router>
    )
  }
}
