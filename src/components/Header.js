import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className={classes.Header}>
        <p>
          Header
        </p>
        <div>
          <Link to="/auth/register">
            Register
          </Link>
          <Link to="/auth/login">
            Login
          </Link>
        </div>
      </div>
    );
  }
}
