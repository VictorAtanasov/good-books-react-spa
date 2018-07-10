import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from './actions/userActions';
import classes from './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Authentication from './containers/Authentication';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth/register" render={props => <Authentication type="register" {...props} />} />
            <Route path="/auth/login" render={props => <Authentication type="login" {...props} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
