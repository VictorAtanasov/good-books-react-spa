import React from 'react';
import Input from './Input';

const Form = (props) => {
  const data = Object.values(props.formFields);
  const inputs = data.map((val, i) => {
    return (
      <Input {...val} key={i} />
    );
  });

  return (
    <form onSubmit={props.submit}>
      {inputs}
      <input
        type="submit"
        value="Register"
      />
    </form>
  );
};

export default Form;
