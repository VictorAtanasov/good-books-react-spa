import React from 'react';
import './home.css';
import Logo from '../../media/logo.png';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
        </div>
        <div className="slogan-wrapper">
          <h1>
            Meet your next favorite book
          </h1>
          <div className="border" />
          <h3>
            Deciding what to read next?
          </h3>
          <h4>
            You’re in the right place
          </h4>
        </div>
        <div className="scroll" />
      </div>
    );
  }
}
