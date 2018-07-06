import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';
import Input from '../components/common/Input';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
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
      username: this.state.username,
    };
    // this.props.registerUser(data)
    //   .then((resp) => {
    //     console.log(resp)
    //   })
    // console.log(data);
    // this.refs.registerForm.reset();
  }

  render() {
    return (
      <div>
        <div>
          <h2>
            Register
          </h2>
          <div>
            <form ref="registerForm" onSubmit={this.formSubmit}>
              <Input
                type="text"
                placeholder="email"
                name="email"
                value={this.state.email}
                change={ev => this.handleChange(ev)}
              />
              <Input
                type="text"
                placeholder="username"
                name="username"
                value={this.state.username}
                change={ev => this.handleChange(ev)}
              />
              <Input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                change={ev => this.handleChange(ev)}
              />
              <input
                type="submit"
                value="Register"
              />
            </form>
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


export default connect(mapStateToProps, mapDispatchToProps)(Register);
