import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { BounceLoader } from 'react-spinners';
import * as userActions from '../../actions/userActions';
import Form from '../../components/forms/Form';
import userModel from '../../models/user.model';
import './authentication.css';
import Logo from '../../media/logo.png';
import userFormData from '../../models/user.form.model';
import Snackbar from '../../components/common/snackbar/Snackbar';

export class Authentication extends React.Component {
  constructor(props) {
    super(props);
    this.formData = JSON.parse(JSON.stringify(userFormData[this.props.type]));
    this.state = {
      formFields: {
        ...this.formData,
      },
      loading: false,
      snackbarOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.url !== this.props.match.url) {
      const newData = JSON.parse(JSON.stringify(userFormData[nextProps.type]));
      this.setState({
        formFields: {
          ...newData,
        },
        errors: {},
      });
    }
  }

  handleChange(ev) {
    const val = ev.target.value;
    const fieldName = ev.target.name;
    this.setState((prevState) => {
      const newForm = { ...prevState.formFields };
      newForm[fieldName].value = val;
      return {
        formFields: newForm,
      };
    });
  }

  handleRegistration(ev) {
    ev.preventDefault();
    const data = {
      email: this.state.formFields.email.value,
      password: this.state.formFields.password.value,
      username: this.state.formFields.username.value,
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
              snackbarOpen: true,
            });
          }
        });
    } else {
      this.setState({
        formMessage: dataValidation.message,
        snackbarOpen: true,
      });
    }
    ev.target.reset();
  }

  handleLogin(ev) {
    ev.preventDefault();
    const data = {
      email: this.state.formFields.email.value,
      password: this.state.formFields.password.value,
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
              snackbarOpen: true,
            });
          }
        });
    } else {
      this.setState({
        formMessage: dataValidation.message,
        snackbarOpen: true,
      });
    }
    ev.target.reset();
  }

  closeSnackbar() {
    this.setState({
      snackbarOpen: false,
    });
  }

  render() {
    const { type } = this.props;
    let form = null;
    let authMethod = null;
    let msg = null;
    if (type === 'registrationForm') {
      authMethod = 'login';
      msg = 'Already have an account?';
      form = (
        <Form
          formFields={this.state.formFields}
          submit={this.handleRegistration}
          errors={this.state.errors ? this.state.errors : null}
          formMessage={this.state.formMessage ? this.state.formMessage : null}
          buttonName="Register"
          change={ev => this.handleChange(ev)}
          loading={this.state.loading}
        />
      );
    } else {
      authMethod = 'register';
      msg = 'Don\'t have an account?';
      form = (
        <Form
          formFields={this.state.formFields}
          submit={this.handleLogin}
          errors={this.state.errors ? this.state.errors : null}
          formMessage={this.state.formMessage ? this.state.formMessage : null}
          buttonName="LogIn"
          change={ev => this.handleChange(ev)}
          loading={this.state.loading}
        />
      );
    }
    return (
      <div className="auth-wrapper" onClick={this.closeSnackbar}>
        <div className="form-wrapper">
          <div className="form-left">
            <img src={Logo} alt="" />
            <div className="auth-loader">
              <BounceLoader loading={this.state.loading} color="#1976D2" size={70} />
            </div>
            {form}
            <div className="form-left-footer">
              <p>
                {msg}
              </p>
              <Link to={`/auth/${authMethod}`} className="btn btn-text-default">
                {`${authMethod} now`}
              </Link>
            </div>
          </div>
          <div className="form-right" />
        </div>
        <Snackbar
          message={this.state.formMessage}
          open={this.state.snackbarOpen}
          click={this.closeSnackbar}
          styles={{ backgroundColor: '#fff', color: '#B71C1C' }}
        />
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
