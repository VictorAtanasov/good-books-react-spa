export const registrationForm = {
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
};

export const loginForm = {
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
};
