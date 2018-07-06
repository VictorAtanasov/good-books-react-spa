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
    return window.fetch(`${domain}/auth/register`)
      .then((resp) => {
        console.log(resp);
      });
  }
}
