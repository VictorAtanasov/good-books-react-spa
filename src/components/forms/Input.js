import React from 'react';
import './input.css';

const Input = (props) => {
  return (
    <div className={`input-default-wrapper ${props.error ? 'errors' : ''}`}>
      <label
        className={`input-label ${props.value !== '' ? 'input-default-label-up' : ''}`}
        htmlFor={props.name}
      >
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
      <span className="input-error">
        {props.error}
      </span>
    </div>
  );
};

export default Input;
