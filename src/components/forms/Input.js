import React from 'react';
import './input.css';

const Input = (props) => {
  let isValue = '';
  if (props.value !== '') {
    isValue = 'input-default-label-up';
  }
  return (
    <div className="input-default-wrapper">
      <label
        className={`input-label ${isValue}`}
        htmlFor={props.name}>
        {props.placeholder}
      </label>
      <input
        type={props.type}
        onChange={props.change}
        id={props.id}
        name={props.name}
        className="input-default"
        value={props.value}
      />
    </div>
  );
};

export default Input;
