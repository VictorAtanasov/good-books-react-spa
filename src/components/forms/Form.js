import React from 'react';
import Input from './Input';
import ErrorMessage from '../common/ErrorMessage';
import Button from '../common/Button';

const Form = (props) => {
  const data = Object.values(props.formFields);
  const inputs = data.map((val, i) => {
    return (
      <div key={i}>
        <Input {...val} change={props.change} />
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
        <Button
          type="submit"
          text={props.buttonName}
          variant="outline"
          color="primary"
        />
      </form>
      <ErrorMessage message={props.formMessage ? props.formMessage : null} />
    </div>
  );
};

export default Form;
