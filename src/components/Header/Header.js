import React from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarLeftOpen: false,
    };

    this.logout = this.logout.bind(this);
    this.checkForUser = this.checkForUser.bind(this);
    this.sidebarActions = this.sidebarActions.bind(this);
  }

  checkForUser() {
    return JSON.parse(this.props.getUser());
  }

  logout() {
    this.props.logoutUser();
    this.setState(this.state);
  }

  sidebarActions() {
    this.setState({
      sidebarLeftOpen: !this.state.sidebarLeftOpen,
    });
  }

  render() {
    const user = this.checkForUser();
    return (
      <div className="right">
        <span className="header-item">
          <i className="fas fa-search" />
        </span>
        <div
          className="header-item menu-wrapper"
          onClick={this.sidebarActions}
        >
          <i className="fas fa-bars" />
        </div>
        <Sidebar
          open={this.state.sidebarLeftOpen}
          close={this.sidebarActions}
          userData={user}
          logoutBtn={this.logout}
        />
      </div>
    );
  }
}
