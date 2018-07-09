/* global window */

const domain = 'https://good-books-rdfwwrecig.now.sh';

const getOptions = () => ({
  method: 'POST',
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default class Auth {
  static register(user) {
    const options = getOptions();
    options.body = JSON.stringify(user);
    return window.fetch(`${domain}/auth/register`, options)
      .then(res => res.json())
      .catch(err => err.json());
  }

  static login(user) {
    const options = getOptions();
    options.body = JSON.stringify(user);
    return window.fetch(`${domain}/auth/login`, options)
      .then(res => res.json())
      .catch(err => err.json());
  }
}
