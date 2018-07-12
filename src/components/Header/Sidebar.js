import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Sidebar = (props) => {
  const { userData } = props;
  const ifUser = (user) => {
    if (user) {
      return (
        <div>
          <button type="button" onClick={props.logoutBtn}>
            Logout
          </button>
        </div>
      );
    }
    return (
      <div>
        <Link to="/auth/login">
          <i className="far fa-user" />
        </Link>
      </div>
    );
  };

  return (
    <div className={`sidebar pull-right ${props.open ? 'open' : 'close'}`}>
      <div onClick={props.close} className="arrow-wrapper">
        <i className="fas fa-long-arrow-alt-right" />
      </div>
      <div onClick={props.close}>
        <Link to="/">
          Home
        </Link>
      </div>
      {ifUser(userData)}
    </div>
  );
};

export default Sidebar;
