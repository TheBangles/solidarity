import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import history from './history';
import Homepage from './components/Homepage';
import DonateComponent from './DonateComponent';

export default class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={Login} />
          {/* <Route exact path='/donate' component={() => <DonateComponent drizzle={this.props.drizzle} drizzleState={this.props.drizzleState} />} /> */}
          <Route exact path='/donate' render={() => <DonateComponent {...this.props} />} />
          <Route path='/' component={Homepage} />
        </Switch>
      </Router>
    )
  }
}

