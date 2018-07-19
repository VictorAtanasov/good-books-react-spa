import React from 'react';
import Input from './Input';
import Button from '../common/button/Button';

const Form = (props) => {
  const data = Object.values(props.formFields);
  const inputs = data.map((val, i) => {
    return (
      <div key={i}>
        <Input {...val} change={props.change} error={props.errors ? props.errors[val.name] : null} />
      </div>
    );
  });

  return (
    <div className={props.loading ? 'fadeOut' : ''}>
      <form onSubmit={props.submit}>
        {inputs}
        <Button
          type="submit"
          text={props.buttonName}
          variant="outline"
          color="primary"
        />
      </form>
    </div>
  );
};

export default Form;
