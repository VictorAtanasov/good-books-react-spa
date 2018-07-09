import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import Input from '../components/common/Input';
import userModel from '../models/user.model';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  handleChange(ev) {
    const val = ev.target.value;
    this.setState({
      [ev.target.name]: val,
    });
  }

  formSubmit(ev) {
    ev.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const dataValidation = userModel.loginValidation(data);
    if (dataValidation.isFormValid) {
      this.props.loginUser(data)
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

  render() {
    return (
      <div>
        <div>
          <h2>
            Login
          </h2>
          <div>
            <form onSubmit={this.formSubmit}>
              <div>
                <Input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={this.state.email}
                  change={ev => this.handleChange(ev)}
                />
                <p>
                  {this.state.errors ? this.state.errors.email : null}
                </p>
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  change={ev => this.handleChange(ev)}
                />
                <p>
                  {this.state.errors ? this.state.errors.password : null}
                </p>
              </div>
              <input
                type="submit"
                value="Login"
              />
            </form>
            <h2>
              {this.state.formMessage ? this.state.formMessage : null}
            </h2>
          </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Login);
