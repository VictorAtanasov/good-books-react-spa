import React from 'react';
import './input.css';

const Input = (props) => {
  let isValue = '';
  if (props.value !== '') {
    isValue = 'input-default-label-up';
  }
  return (
    <div className="input-default-wrapper">
      <label htmlFor={props.id} className={`input-label ${isValue}`}>
        {props.placeholder}
      </label>
      <input
        type={props.type}
        onChange={props.change}
        id={props.id}
        name={props.name}
        className="input-default"
      />
    </div>
  );
};

export default Input;
