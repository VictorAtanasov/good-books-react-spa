import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.logout = this.logout.bind(this);
    this.checkForUser = this.checkForUser.bind(this);
  }

  checkForUser() {
    return JSON.parse(this.props.getUser());
  }

  logout() {
    this.props.logoutUser();
    this.setState(this.state);
  }

  render() {
    const user = this.checkForUser();
    if (!user) {
      return (
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/auth/login">
            Login
          </Link>
        </div>
      );
    }
    return (
      <div>
        <div>
          <Link to="/">
            Home
          </Link>
          <button type="button" onClick={this.logout}>
            Log Out
          </button>
          <p>
            {`Hello ${user.username}`}
          </p>
        </div>
      </div>
    );
  }
}
