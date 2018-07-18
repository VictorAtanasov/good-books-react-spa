import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as userActions from '../actions/userActions';
import Form from '../components/forms/Form';
import userModel from '../models/user.model';
import Loader from '../components/common/Loader';
import './authentication.css';
import Logo from '../media/logo.png';
import userFormData from '../models/user.form.model';

class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...userFormData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      this.setState({
        ...userFormData,
      });
    }
  }

  handleChange(ev) {
    const val = ev.target.value;
    const fieldName = ev.target.name;
    this.setState((prevState) => {
      const newForm = { ...prevState[this.props.type] };
      newForm[fieldName].value = val;
      return {
        registrationForm: newForm,
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
      this.setState({
        loading: true,
      });
      this.props.registerUser(data)
        .then(() => {
          this.setState({
            loading: false,
          });
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
      this.setState({
        loading: true,
      });
      this.props.loginUser(data)
        .then(() => {
          this.setState({
            loading: false,
          });
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
    let form = null;
    let authMethod = null;
    if (type === 'registrationForm') {
      authMethod = 'login';
      form = (
        <Form
          formFields={this.state.registrationForm}
          submit={this.handleRegistration}
          errors={this.state.errors ? this.state.errors : null}
          formMessage={this.state.formMessage ? this.state.formMessage : null}
          buttonName="Register"
          change={ev => this.handleChange(ev)}
        />
      );
    } else {
      authMethod = 'register';
      form = (
        <Form
          formFields={this.state.loginForm}
          submit={this.handleLogin}
          errors={this.state.errors ? this.state.errors : null}
          formMessage={this.state.formMessage ? this.state.formMessage : null}
          buttonName="LogIn"
          change={ev => this.handleChange(ev)}
        />
      );
    }
    return (
      <div className="auth-wrapepr">
        <div className="form-wrapper">
          <div className="form-left">
            <img src={Logo} alt="" />
            {form}
            <Loader loading={this.state.loading} />
            <Link to={`/auth/${authMethod}`} className="btn btn-text-default">
              {authMethod}
            </Link>
          </div>
          <div className="form-right" />
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
