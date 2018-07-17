import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import * as userActions from './actions/userActions';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Authentication from './containers/Authentication';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            getUser={this.props.getUser}
            logoutUser={this.props.logoutUser}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth/register" render={props => <Authentication type="registrationForm" {...props} />} />
            <Route path="/auth/login" render={props => <Authentication type="loginForm" {...props} />} />
            <Route component={NotFound} />
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
