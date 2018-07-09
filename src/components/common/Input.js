import React from 'react';

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change}
      // value={props.value}
      id={props.id}
      name={props.name}
    />
  );
};

export default Input;
