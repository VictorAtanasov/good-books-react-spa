import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as userActions from '../actions/userActions';
import Form from '../components/common/Form';
import userModel from '../models/user.model';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationForm: {
        email: {
          type: 'text',
          placeholder: 'email',
          name: 'email',
          change: ev => this.handleChange(ev),
          value: '',
        },
        username: {
          type: 'text',
          placeholder: 'username',
          name: 'username',
          change: ev => this.handleChange(ev),
          value: '',
        },
        password: {
          type: 'password',
          placeholder: 'password',
          name: 'password',
          change: ev => this.handleChange(ev),
          value: '',
        },
      },
      loginForm: {
        email: {
          type: 'text',
          placeholder: 'email',
          name: 'email',
          change: ev => this.handleChange(ev),
          value: '',
        },
        password: {
          type: 'password',
          placeholder: 'password',
          name: 'password',
          change: ev => this.handleChange(ev),
          value: '',
        },
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(ev) {
    const val = ev.target.value;
    const fieldName = ev.target.name;
    this.setState((prevState) => {
      const newregistrationForm = { ...prevState.registrationForm };
      newregistrationForm[fieldName].value = val;
      return {
        registrationForm: newregistrationForm,
      };
    });
  }

  handleRegistration(ev) {
    ev.preventDefault();
    const data = {
      email: this.state.registrationForm.email.value,
      password: this.state.registrationForm.password.value,
      username: this.state.registrationForm.username.value,
    };
    const dataValidation = userModel.registerValidation(data);
    if (dataValidation.isFormValid) {
      this.props.registerUser(data)
        .then(() => {
          if (this.props.users.success) {
            this.setState({
              formMessage: this.props.users.message,
            });
          } else {
            this.setState({
              errors: this.props.users.message.errors,
              formMessage: this.props.users.message.message ? this.props.users.message.message
                : this.props.users.message,
            });
          }
        });
    } else {
      this.setState({
        formMessage: dataValidation.message,
      });
    }
    ev.target.reset();
  }

  handleLogin(ev) {
    ev.preventDefault();
    const data = {
      email: this.state.registrationForm.email.value,
      password: this.state.registrationForm.password.value,
    };
    const dataValidation = userModel.loginValidation(data);
    if (dataValidation.isFormValid) {
      this.props.loginUser(data)
        .then(() => {
          if (this.props.users.success) {
            this.setState({
              formMessage: this.props.users.message,
            });
            this.props.history.push('/');
          } else {
            this.setState({
              errors: this.props.users.message.errors,
              formMessage: this.props.users.message.message ? this.props.users.message.message
                : this.props.users.message,
            });
          }
        });
    } else {
      this.setState({
        formMessage: dataValidation.message,
      });
    }
    ev.target.reset();
  }

  render() {
    const { type } = this.props;
    if (type === 'register') {
      return (
        <div>
          <Form
            formFields={this.state.registrationForm}
            submit={this.handleRegistration}
            errors={this.state.errors ? this.state.errors : null}
            formMessage={this.state.formMessage ? this.state.formMessage : null}
          />
        </div>
      );
    }
    return (
      <div>
        <Form
          formFields={this.state.loginForm}
          submit={this.handleLogin}
          errors={this.state.errors ? this.state.errors : null}
          formMessage={this.state.formMessage ? this.state.formMessage : null}
        />
        <div>
          <Link to="/auth/register">
            Register
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userActions, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);