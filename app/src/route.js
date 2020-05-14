import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import history from './history';
import Homepage from './components/Homepage';
import AddProject from './components/AddProject';
import SingleProject from './components/SingleProject';
import AllProjects from './components/AllProjects'

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route
            exact
            path="/login" component={Login}
            />
          <Route
            exact
            path="/add"
            render={() => <AddProject {...this.props} />}
          />
          <Route
            exact
            path="/single"
            render={() => <SingleProject {...this.props} />}
          />
          <Route
            exact
            path="/allprojects"
            render={() => <AllProjects {...this.props} />}
          />

          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
    );
  }
}
