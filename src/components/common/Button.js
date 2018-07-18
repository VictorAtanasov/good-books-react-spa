import React from 'react';
import './button.css';

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`btn btn-${props.variant}-${props.color}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
