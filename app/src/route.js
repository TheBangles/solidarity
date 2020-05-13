import React, {Component} from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import history from './history';
import Homepage from './components/Homepage';

export default class Routes extends Component {

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}

