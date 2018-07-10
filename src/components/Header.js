import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    const storageUser = this.props.getUser();
    this.setState({
      user: JSON.parse(storageUser),
    });

    this.logout = this.logout.bind(this);
  }

  logout() {
    this.props.logoutUser();
    this.setState({
      user: '',
    });
  }

  render() {
    if (this.state.user === '') {
      return (
        <div className={classes.Header}>
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
      <div className={classes.Header}>
        <div>
          <Link to="/">
            Home
          </Link>
          <button type="button" onClick={this.logout}>
            Log Out
          </button>
          <p>
            {`Hello ${this.state.user.username}`}
          </p>
        </div>
      </div>
    );
  }
}
