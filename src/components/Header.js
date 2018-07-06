import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <p>
          Header
        </p>
        <div>
          <Link to="/auth">
            Register
          </Link>
        </div>
      </div>
    );
  }
}