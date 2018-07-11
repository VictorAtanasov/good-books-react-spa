import React from 'react';
import Input from './Input';
import ErrorMessage from '../common/ErrorMessage';

const Form = (props) => {
  const data = Object.values(props.formFields);
  const inputs = data.map((val, i) => {
    return (
      <div key={i}>
        <Input {...val} />
        <p>
          {props.errors ? props.errors[val.name] : null}
        </p>
      </div>
    );
  });

  return (
    <div>
      <form onSubmit={props.submit}>
        {inputs}
        <input
          type="submit"
          value={props.buttonName}
        />
      </form>
      <ErrorMessage message={props.formMessage ? props.formMessage : null} />
    </div>
  );
};

export default Form;
