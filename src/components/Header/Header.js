import React from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../../media/logo.png';

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
      <div className="header">
        <div className="header-elements-wrapper">
          <span>
            <i className="fas fa-search" />
          </span>
          <img src={Logo} alt="logo" className="logo" />
          <div
            className="menu-wrapper"
            onClick={this.sidebarActions}
          >
            <i className="fas fa-bars" />
          </div>
        </div>
        {/* <div className="header-links-wrapper">
          <Link to="/">
            Authors
          </Link>
          <Link to="/">
            Books
          </Link>
          <Link to="/">
            Categpries
          </Link>
        </div> */}
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
