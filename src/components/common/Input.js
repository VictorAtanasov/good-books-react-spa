import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change}
      id={props.id}
      name={props.name}
    />
  );
};

export default Input;
