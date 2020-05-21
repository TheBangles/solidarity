import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import history from './history';
import Homepage from './components/Homepage';
import AddProject from './components/AddProject';
import SingleProject from './components/SingleProject';
import AllProjects from './components/AllProjects';
import Search from './components/Search';

import FinishedProjects from './components/FinishedProjects';

export default class Routes extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route
            exact
            path="/add"
            render={() => <AddProject {...this.props} />}
          />
          <Route
            exact
            path="/single/:id"
            render={() => <SingleProject {...this.props} history={history}/>}
          />
          <Route
            exact
            path="/all"
            render={() => <AllProjects {...this.props} />}
          />
          <Route
            exact
            path="/finished"
            render={() => <FinishedProjects {...this.props} />}
          />
          {/* <Route
            exact
            path="/search"
            render={() => <Search {...this.props} />}
          /> */}
          <Route path="/"
            render={() => <Homepage {...this.props}/> }
          />
        </Switch>
      </Router>
    );
  }
}
