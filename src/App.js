import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from './actions/userActions';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Register from './containers/Register';
import Login from './containers/Login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth/register" component={Register} />
            <Route path="/auth/login" component={Login} />
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
